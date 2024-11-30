import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';
import { RootState } from '@types';

import { Container, Content, TasksIcons } from './styles';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth)
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Content>
        <TasksIcons />

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleLogin} loading={loading}>
          Login
        </Button>
      </Content>
    </Container>
  );
};