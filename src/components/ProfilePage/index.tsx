import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gustavo Mendes</h1>
        <h2>@Mendess.gu</h2>

        <p>
          Developer at <a href="https://www.academiadapele.com.br/">@AcademiaDaPele</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 07 de Julho de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>45</strong>
          </span>
          <span>
            <strong>985 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
