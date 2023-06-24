import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { UserAvatar } from '../../components/userAvatar/userAvatar';
import { users } from '../../mock/userMock';
import {
  ContainerCard,
  ContainerSearch,
  MainContainer,
  TitleContainerCard,
} from './userDetailsStyle';

export const UserDetails = () => {
  const verifiedUser = users.find((user) => user._id === '5f1d7f3e5dc58af42fc39242');
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <UserAvatar selectUser={verifiedUser} />
        <TitleContainerCard>Amigos</TitleContainerCard>
        <ContainerCard>
          {verifiedUser?.friends?.map((user) => {
            return <Card key={user._id} user={user} />;
          })}
        </ContainerCard>
      </MainContainer>
    </>
  );
};
