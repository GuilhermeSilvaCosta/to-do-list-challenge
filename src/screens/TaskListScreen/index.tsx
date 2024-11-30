import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import { Task, RootStackParamList, RootState } from '@types';
import { TaskCard } from '~/components/TaskCard';
import { FAB } from '~/components/FAB';
import { tasksRequest } from '~/store/modules/tasks/actions';
import { selectTask } from '~/store/modules/task/actions';

import { Container, Header, Title } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'TaskList'>;

export const TaskListScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const { list: tasks, loading } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(tasksRequest());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => (
    <TaskCard
      task={item}
      onPress={() => dispatch(selectTask(item))}
    />
  );

  const handleNewTask = () => {
    navigation.navigate('CreateTask');
  }

  return (
    <Container>
      <Header>
        <Title>Minhas tarefas</Title>
      </Header>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      <FAB onPress={handleNewTask} />
    </Container>
  );
};