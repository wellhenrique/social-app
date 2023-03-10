import { RFValue } from 'react-native-responsive-fontsize';

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.7 })`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};

  border-radius: 5px;
  align-items: center;

  margin-top: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: ${RFValue(14)}px;

  padding: 18px;
`;
