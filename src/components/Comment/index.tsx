import { Comment as CommentType } from '@types';

import { CommentContainer, CommentHeader, TimeStamp, CommentText } from './styles';

type CommentProps = {
  comment: CommentType
}

export const Comment = ({ comment }: CommentProps) => (
  <CommentContainer>
    <CommentHeader>
      <TimeStamp>{new Date(comment.createdAt).toLocaleDateString()}</TimeStamp>
    </CommentHeader>
    <CommentText>{comment.text}</CommentText>
  </CommentContainer>
);