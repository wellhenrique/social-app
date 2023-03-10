import { useState } from 'react';
import {
  Control,
  Controller,
  FieldError,
  FieldErrorsImpl,
  Merge,
} from 'react-hook-form';
import { TextInputProps } from 'react-native';

import theme from '../../../theme';
import { Input } from '../Input';

import { Container, Error } from './styles';

type ErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined;

interface Props extends TextInputProps {
  control: Control;
  name: string;
  bgColor?: string;
  error?: ErrorType;
}

export function InputForm({ control, name, error, bgColor, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const focusedBorderColor = bgColor ? bgColor : theme.COLORS.PINK_LIGHT;

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            {...props}
            onChangeText={onChange}
            onFocus={() => setIsFocused(!isFocused)}
            onBlur={() => setIsFocused(false)}
            bgColor={isFocused ? focusedBorderColor : theme.COLORS.GRAY_500}
            value={value}
          />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
