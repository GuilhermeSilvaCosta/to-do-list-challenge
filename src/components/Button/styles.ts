import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Gradient = styled(LinearGradient).attrs(({ colors }) => ({
  colors: colors,
  start: { x: -1, y: 0 },
  end: { x: 1, y: 0 }
}))`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const ButtonText = styled.Text`
  color: #06060A;
  background-color: transparent;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
`;