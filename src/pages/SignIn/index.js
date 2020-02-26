import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import { signInRequest } from '../../redux/modules/auth/actions';

const schema = Yup.object().shape({
   email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
   password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
   const dispatch = useDispatch();
   const loading = useSelector(state => state.auth.loading);

   function handleSubmit(data) {
      const { email, password } = data;

      dispatch(signInRequest(email, password));
   }

   return (
      <>
         <img src={logo} alt="GoBarber" />

         <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Seu e-mail" />
            <Input name="password" type="password" placeholder="Seu senha" />

            <button type="submit">
               {loading ? 'Carregando...' : 'Acessar'}
            </button>
            <Link to="/register">Criar conta gratuita</Link>
         </Form>
      </>
   );
}
