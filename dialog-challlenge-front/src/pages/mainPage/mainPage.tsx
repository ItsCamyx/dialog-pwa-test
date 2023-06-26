import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { users } from '../../mock/userMock';
import { LIST_QUERY } from '../../services/listQuery';
import { useQuery } from '@apollo/client';
import { ContainerCard, ContainerSearch, MainContainer } from './mainPageStyle';
import { IPerson } from '../../interface/user';

export const MainPage = () => {
  const { data } = useQuery(LIST_QUERY);
  return (
    <>
      <MainContainer>
        <ContainerSearch>
          <Header />
        </ContainerSearch>
        <ContainerCard>
          {data.list.map((user: IPerson) => {
            return <Card key={user._id} user={user} />;
          })}
        </ContainerCard>
      </MainContainer>
    </>
  );
};
