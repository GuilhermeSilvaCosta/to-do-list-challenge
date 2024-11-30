import styled from 'styled-components/native'
import { Button } from '~/components/Button';

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

export const CreateButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;
`;