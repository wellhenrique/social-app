/* eslint-disable @typescript-eslint/naming-convention */
import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const LoginStyles = {
  Container: styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  `,

  LoginHeader: styled.View`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `,

  LoginHeaderTitle: styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-top: 100px;
    margin-bottom: 10px;
  `,

  LoginHeaderSubTitle: styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  `,

  InputsContainer: styled.View`
    display: flex;

    input:last-child {
      margin-top: 20px;
    }
  `,
};
