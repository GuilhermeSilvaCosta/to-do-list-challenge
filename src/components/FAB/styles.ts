import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Gradient = styled(LinearGradient).attrs(({ colors }) => ({
  colors: colors,
  start: { x: -1, y: 0 },
  end: { x: 1, y: 0 }
}))`
  background-color: #6200ea;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;