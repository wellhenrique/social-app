import { TextInput } from 'react-native';

import styled from 'styled-components/native';

type Props = {
  bgColor: string;
};

export const Container = styled(TextInput)<Props>`
  width: 100%;
  padding: 12px 8px;

  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_600};

  border: 1.5px solid ${({ bgColor }) => bgColor};
`;
