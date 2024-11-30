import styled from 'styled-components/native';

export const CommentContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const CommentHeader = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

export const TimeStamp = styled.Text`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.typography.sizes.xs}px;
`;

export const CommentText = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
`;