import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { 
  MainContainer,
   Title,
   Form,
   Field,
   Label,
   Input,
   Button,
   ButtonContainer,
   Container,
   LoginWith,
   HorizontalLine,
   IconsContainer,
   ForgotPassword } from './styles';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/Icon';


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
    <MainContainer>
      <Container>
        <Title>Seja bem Vindo</Title>

        <Form onSubmit={formik.handleSubmit}>
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
          <ButtonContainer>
            <Button type='submit'>Entrar</Button>
          </ButtonContainer>
        </Form>

        <LoginWith>Ou faça o login Com</LoginWith>
        <HorizontalLine />

        <IconsContainer>
          <Icon icon="facebook">
            <FaFacebookF />
          </Icon>
          <Icon icon="instagram">
            <FaInstagram />
          </Icon>
          <Icon icon="email">
            <AiOutlineMail />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Esqueceu a Senha?</ForgotPassword>
      </Container>
    </MainContainer>
  );
};

export default Login;
