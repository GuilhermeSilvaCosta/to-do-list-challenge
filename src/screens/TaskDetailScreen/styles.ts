import styled from 'styled-components/native';
import { TaskStatusEnum } from '@types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.sm}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.xl}px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`;

export const StatusSelector = styled.View`
  flex-direction: row;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
  gap: ${({ theme }) => theme.spacing.xs}px;
  justify-content: space-between;
`;

export const StatusButton = styled.TouchableOpacity<{ isSelected: boolean; status: TaskStatusEnum }>`
  background-color: ${({ theme, isSelected, status }) =>
    isSelected ? theme.colors.status[status.toLocaleLowerCase()] : theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  flex: 1;
  align-items: center;
`;

export const ButtonText = styled.Text`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;

export const CancelButton = styled.TouchableOpacity`
`;

export const CancelButtonText = styled.Text`
  background-color: transparent;
  font-weight: ${({ theme }) => theme.typography.weights.regular};
  color: ${({ theme }) => theme.colors.error};
`;