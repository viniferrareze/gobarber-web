import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Content, Profile } from './styles';

import logo from '../../assets/logo-purple.svg';

export default function Header() {
   const profile = useSelector(state => state.user.profile);

   return (
      <Container>
         <Content>
            <nav>
               <img src={logo} alt="GoBarber" />
               <Link to="/dashboard">DASHBOARD</Link>
            </nav>

            <aside>
               <Notifications />
               <Profile>
                  <div>
                     <strong>Carlos Vinícius</strong>
                     <Link to="/profile">Meu Perfil</Link>
                  </div>

                  <img
                     src={
                        profile.avatar.url ||
                        'https://api.adorable.io/avatars/50/abott@adorable.png'
                     }
                     alt="avatar"
                  />
               </Profile>
            </aside>
         </Content>
      </Container>
   );
}
