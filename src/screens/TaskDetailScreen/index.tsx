import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Comment } from '~/components/Comment';
import { updateTaskRequest } from '~/store/modules/task/actions'
import { TaskStatusEnum, RootStackParamList, RootState } from '@types';

import { Container, Content, Title, Description, 
  StatusSelector, StatusButton, ButtonText} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskDetails'>;

export const TaskDetailsScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.task);

  const [status, setStatus] = useState<TaskStatusEnum>(data.status);
  const [newComment, setNewComment] = useState('');

  const handleUpdate = () => {
    dispatch(updateTaskRequest(status, newComment));
  };

  return (
    <Container>
      <ScrollView>
        <Content>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>

          <StatusSelector>
            {([TaskStatusEnum.PENDING, TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.COMPLETED]).map((statusEnum) => (
              <StatusButton
                key={statusEnum}
                status={statusEnum}
                isSelected={status == statusEnum}
                onPress={() => setStatus(statusEnum)}
              >
                <ButtonText>
                  {statusEnum.replace('_', ' ').toUpperCase()}
                </ButtonText>
              </StatusButton>
            ))}
          </StatusSelector>

          {data.comments?.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}

          <Input
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
            multiline
          />

          <Button onPress={handleUpdate} loading={loading}>
            Atualizar
          </Button>
        </Content>
      </ScrollView>
    </Container>
  );
};