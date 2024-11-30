import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.text.surface
}))`
  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-width: 1px;
  font-size: ${({ theme }) => theme.typography.sizes.md}px;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
`;