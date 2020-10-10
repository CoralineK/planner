import React from 'react';
import styled from 'styled-components';
import AuthBox from '../components/Auth/AuthBox';
import { colors } from '../Theme';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background};
`;
const Boxes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  font-family: 'Roboto Slab';
  font-size: 45px;
  font-weight: bold;
  padding-bottom: 20px;
  color: ${colors.secondary};
`;

function Auth() {
  return (
    <Container>
      <Title>LOVELY PLANNER</Title>
      <Boxes>
        <AuthBox title="SIGN IN"></AuthBox>
        <AuthBox title="REGISTER"></AuthBox>
      </Boxes>
    </Container>
  );
}

export default Auth;
