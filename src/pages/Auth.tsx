import React from 'react';
import styled from 'styled-components';
import AuthBox from '../components/Auth/AuthBox';
import { colors } from '../Theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;

function Auth() {
  return (
    <Container>
      <AuthBox title="SIGN IN"></AuthBox>
      <AuthBox title="REGISTER"></AuthBox>
    </Container>
  );
}

export default Auth;
