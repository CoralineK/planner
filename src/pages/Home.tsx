import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Home/Navigation';
import { colors } from '../Theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.paper};
`;

function Home() {
  return (
    <Container>
      <Navigation></Navigation>
    </Container>
  );
}

export default Home;
