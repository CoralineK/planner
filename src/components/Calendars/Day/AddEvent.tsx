import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../Constants';

const Container = styled.div`
  width: 910px;
  height: 15vh;
  background-color: ${colors.extra};
  margin-bottom: 2vh;
  border-radius: 6px;
`;

function AddEvent() {
  return <Container></Container>;
}

export default AddEvent;
