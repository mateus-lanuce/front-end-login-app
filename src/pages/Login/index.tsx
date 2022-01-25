import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Container, Title, Form, Field, Label, Input, Button, ButtonContainer } from './styles';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';


const Login: React.FC = () => {

  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Endereço de Email Invalido').required('Campo Obrigátorio'),
      password: Yup.string().required('Campo Obrigátorio')
    }),

    onSubmit: async (values) => {
      try {
        await authenticate(values.email, values.password)

        navigate('/profile')

      } catch (error) {
        
      }
    }
  })

  return (
    <Container>
      <Title>Pagina de Login</Title>

      <Form onSubmit={formik.handleSubmit}>
        <Field>
          <Label htmlFor='email'>Email:</Label>
          <Input 
            type='email' 
            name='email' 
            id='email' 
            placeholder='Seu Email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </Field>
        <Field>
          <Label htmlFor='password'>Senha:</Label>
          <Input 
            type='password' 
            name='password' 
            id='password' 
            placeholder='Sua Senha'
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </Field>
        <ButtonContainer>
          <Button type='submit'>Entrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Login;
