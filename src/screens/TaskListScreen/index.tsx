import React, { useEffect, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { Task, TabsParamList, RootState, TaskStatusEnum } from '@types';
import { TaskCard } from '~/components/TaskCard';
import { FAB } from '~/components/FAB';
import { tasksRequest } from '~/store/modules/tasks/actions';
import { selectTask } from '~/store/modules/task/actions';
import { theme } from '~/theme/theme';

import { Container, Header, Title } from './styles'

const Tab = createBottomTabNavigator<TabsParamList>();

type Props = BottomTabScreenProps<TabsParamList, 'Pending'> | 
  BottomTabScreenProps<TabsParamList, 'InProgress'> | 
  BottomTabScreenProps<TabsParamList, 'All'> ;

export const TaskListScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        }
      }}
    >
      <Tab.Screen 
        name="Pending" 
        component={TaskList} 
        initialParams={{ status: TaskStatusEnum.PENDING }}
        options={{
          tabBarLabel: 'Pendentes',
          tabBarIcon: ({ focused }) => <AntDesign name="clockcircleo" color={focused ? theme.colors.primary : theme.colors.text.light} size={24} />
        }}
      />

      <Tab.Screen 
        name="InProgress" 
        component={TaskList} 
        initialParams={{ status: TaskStatusEnum.IN_PROGRESS }} 
        options={{
          tabBarLabel: 'Em andamento',
          tabBarIcon: ({ focused }) => <AntDesign name="play" color={focused ? theme.colors.primary : theme.colors.text.light} size={24} />
        }}
      />

      <Tab.Screen 
        name="All" 
        component={TaskList} 
        options={{
          tabBarLabel: 'Histórico',
          tabBarIcon: ({ focused }) => <FontAwesome name="history" color={focused ? theme.colors.primary : theme.colors.text.light} size={24} />
        }}
      />
    </Tab.Navigator>
  );
};

export const TaskList = ({ navigation, route }: Props) => {
  const dispatch = useDispatch();

  const { list } = useSelector((state: RootState) => state.tasks);
  const tasks = useMemo(
    () => !route.params ? list : list.filter(task => task.status === route.params.status)
  , [list, route.params]);

  useEffect(() => {
    dispatch(tasksRequest());
  }, [dispatch]);

  const renderItem = ({ item }: { item: Task }) => (
    <TaskCard
      task={item}
      onPress={() => item.status !== TaskStatusEnum.CANCELED && dispatch(selectTask(item))}
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