import React from 'react';
import styled from 'styled-components';
import SignUp from './RegisterForm';
import SignIn from './LogInForm';
import { colors } from '../../Theme';

const Box = styled.div`
  width: 500px;
  height: 500px;
  padding: 50px;
  margin: 50px;
  background-color: ${colors.paper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 4px rgba(150, 150, 150, 0.3);
`;
const Title = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 30px;
`;

type Props = {
  title: string;
};

function AuthBox({ title }: Props) {
  return (
    <Box>
      <Title>{title}</Title>
      {title === 'REGISTER' ? <SignUp /> : <SignIn />}
    </Box>
  );
}

export default AuthBox;
