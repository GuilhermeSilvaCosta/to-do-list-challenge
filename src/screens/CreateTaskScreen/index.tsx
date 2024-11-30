import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import { Input } from '~/components/Input';
import { saveTaskRequest } from '~/store/modules/task/actions';

import { Container, Content, CreateButton, Title } from './styles';


type Props = NativeStackScreenProps<RootStackParamList, 'CreateTask'>;

export const CreateTaskScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = () => {
    dispatch(saveTaskRequest(title, description));
  }

  return (
    <Container>
      <Content>
        <Title>Nova Tarefa</Title>

        <Input
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
        />

        <Input
          placeholder="Descrição"
          value={description}
          onChangeText={setDescription}
        />

        <CreateButton onPress={handleSubmit}>
          Criar
        </CreateButton>
      </Content>
    </Container>
  );
}

export default CreateTaskScreen;