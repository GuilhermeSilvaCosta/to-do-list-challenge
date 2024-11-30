import styled from 'styled-components/native';
import { TaskStatusEnum } from '@types';

export const Container = styled.TouchableOpacity<{ status: TaskStatusEnum }>`
  background-color: ${({ theme, status }) => theme.colors.status[status.toLocaleLowerCase()]};
  /* background-color: ${({ theme }) => theme.colors.surface}; */
  /* padding: ${({ theme }) => theme.spacing.md}px; */
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg}px 0 0 ${({ theme }) => theme.borderRadius.lg}px;
  padding: ${({ theme }) => theme.spacing.md}px;
  width: 98%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.lg}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.sm}px;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const StatusBadge = styled.View<{ status: TaskStatusEnum }>`
  background-color: ${({ theme, status }) => theme.colors.status[status.toLocaleLowerCase()]};
  padding: ${({ theme }) => theme.spacing.xs}px ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  align-self: flex-start;
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;