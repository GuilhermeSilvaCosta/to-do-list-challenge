import React from 'react';
import { NavigationContainer, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '~/screens/LoginScreen';
import { TaskListScreen } from '~/screens/TaskListScreen';
import { TaskDetailsScreen } from '~/screens/TaskDetailScreen';
import { CreateTaskScreen } from '~/screens/CreateTaskScreen'
import { RootStackParamList } from '@types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

export function navigate(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function replace(name: keyof RootStackParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.replace(name, params),
    );
  }
}

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TaskList"
          component={TaskListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TaskDetails"
          component={TaskDetailsScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerBackTitle: 'Tarefas',
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="CreateTask"
          component={CreateTaskScreen}
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerBackTitle: 'Tarefas',
            headerBackButtonMenuEnabled: true
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};