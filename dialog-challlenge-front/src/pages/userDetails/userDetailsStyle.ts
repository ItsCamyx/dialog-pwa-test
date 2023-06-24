import styled from 'styled-components';

export const MainContainer = styled.div`
  background-color: #011528;
  min-height: 100vh;
`;

export const ContainerSearch = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  justify-content: center;
  align-items: center;
`;
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-items: center;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 32px;
`;

export const TitleContainerCard = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 16px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
