import { Task, TaskStatusEnum } from '@types';

import { Container, Content, Description, Title, StatusBadge, StatusText } from './styles';

type TaskCardProps = {
  task: Task;
  onPress: () => void;
}

const getStatus = (status: String): String => {
  if (TaskStatusEnum.PENDING === status) return 'PENDENTE';
  if (TaskStatusEnum.IN_PROGRESS === status) return 'EM ANDAMENTO';
  if (TaskStatusEnum.COMPLETED === status) return 'FINALIZADA';

  return status;
}

export const TaskCard = ({ task, onPress }: TaskCardProps) => (
  <Container status={task.status} onPress={onPress}>
    <Content>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <StatusBadge status={task.status}>
        <StatusText>{getStatus(task.status)}</StatusText>
      </StatusBadge>
    </Content>
  </Container>
);