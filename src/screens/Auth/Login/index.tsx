/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '../../../components/Forms/Button';
import { InputForm } from '../../../components/Forms/InputForm';
import theme from '../../../theme';

import { LoginStyles } from './styles';

const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Digite um email válido')
    .required('O email não pode ser vazio'),

  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(6, 'A senha deve conter pelo menos 6 dígitos'),
});

export function Login() {
  const [error, setError] = useState<any | null>(null);
  const { control, handleSubmit, register } = useForm({
    resolver: yupResolver(loginValidationSchema) as any,
  });

  const onFormSubmit = (data: any) => console.log(data);
  const onErrors = (errors: any) => setError(JSON.parse(errors));

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <LoginStyles.Container>
      <LoginStyles.LoginHeader>
        <LoginStyles.LoginHeaderTitle>
          Bem vindo novamente
        </LoginStyles.LoginHeaderTitle>

        <LoginStyles.LoginHeaderSubTitle>
          Faça login para acessar a sua conta
        </LoginStyles.LoginHeaderSubTitle>
      </LoginStyles.LoginHeader>

      <LoginStyles.InputsContainer>
        <InputForm
          control={control}
          name="email"
          bgColor={theme.COLORS.PINK_LIGHT}
          placeholder="Digite seu e-mail"
          error={error && error.email.message}
          style={{ marginBottom: 12 }}
        />

        <InputForm
          control={control}
          name="password"
          error={error && error.password.message}
          bgColor={theme.COLORS.PINK_LIGHT}
          placeholder="Digite sua senha"
        />
      </LoginStyles.InputsContainer>

      <Button onPress={handleSubmit(onFormSubmit, onErrors)} title="Salvar" />
    </LoginStyles.Container>
  );
}
