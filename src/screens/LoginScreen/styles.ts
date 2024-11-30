import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;

export const TasksIcons = styled(FontAwesome5).attrs(({
  name: "tasks",
  size: 48
}))`
  align-self: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: ${({ theme }) => theme.spacing.xl}px;
`;