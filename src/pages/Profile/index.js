import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { updateProfileRequest } from '../../redux/modules/user/actions';

export default function Profile() {
   const profile = useSelector(state => state.user.profile);
   const dispatch = useDispatch();

   function handleSubmit(data) {
      dispatch(updateProfileRequest(data));
   }

   return (
      <Container>
         <Form initialData={profile} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Nome completo" />
            <Input
               type="email"
               name="email"
               placeholder="Seu endereço de e-mail"
            />

            <hr />

            <Input type="password" name="oldPassword" placeholder="Sua senha" />
            <Input type="password" name="password" placeholder="Nova senha" />
            <Input
               type="password"
               name="confirmPassword"
               placeholder="Confirmação de senha"
            />

            <button type="submit">Atualizar perfil</button>
         </Form>

         <button type="button">Sair do GoBarber</button>
      </Container>
   );
}
