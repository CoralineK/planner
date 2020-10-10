import React from 'react';
import styled from 'styled-components';

const TITLE = 'INFORMATION';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 500px;
  min-height: 400px;
  padding: 70px;
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 30px;
`;

export default function Register() {
  return (
    <Container>
      <Box>
        <Title>{TITLE}</Title>
      </Box>
    </Container>
  );
}
