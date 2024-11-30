import { TextInputProps } from 'react-native';

import { InputContainer, StyledInput, ErrorText } from './styles';

type InputProps = TextInputProps & {
  error?: string;
}

export const Input = ({ error, ...rest }: InputProps) => (
  <InputContainer>
    <StyledInput {...rest} />
    {error && <ErrorText>{error}</ErrorText>}
  </InputContainer>
);