import React from 'react';
import styled from 'styled-components';
import SignUp from '../components/Auth/SignUp';
import SignIn from '../components/Auth/SignIn';
import { useHistory } from 'react-router-dom';

import { colors } from '../Constants';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;
const Title = styled.p`
  font-family: 'Roboto Slab';
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 20px;
  color: ${colors.secondary};
`;

function Auth() {
  const history = useHistory();
  const path = history.location.pathname;

  return (
    <Container>
      <Title>LOVELY PLANNER</Title>
      {path === '/login' ? <SignIn /> : <SignUp />}
    </Container>
  );
}

export default Auth;
