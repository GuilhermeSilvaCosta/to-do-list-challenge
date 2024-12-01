import React from 'react';
import { NavigationContainer, createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import { LoginScreen } from '~/screens/LoginScreen';
import { TaskListScreen } from '~/screens/TaskListScreen';
import { TaskDetailsScreen, HeaderRightButton } from '~/screens/TaskDetailScreen';
import { CreateTaskScreen } from '~/screens/CreateTaskScreen'
import { CreateUserScreen } from '~/screens/CreateUserScreen';
import { RootStackParamList, RootState } from '@types';

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
  const { signed } = useSelector((state: RootState) => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <>
          {!signed && <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CreateUser"
              component={CreateUserScreen}
              options={{
                headerShown: false,
              }}
            />
          </>}

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
              headerRight: HeaderRightButton,
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
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};