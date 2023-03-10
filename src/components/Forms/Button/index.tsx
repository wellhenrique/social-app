import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface ButtonData extends TouchableOpacityProps {
  title: string;
  activeOpacity?: 0.7 | undefined;
}

export function Button({ title, ...props }: ButtonData) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
    </Container>
  );
}
