import React from 'react';
import styled from 'styled-components';
import AuthBox from '../components/Auth/AuthBox';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0e1ec;
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
