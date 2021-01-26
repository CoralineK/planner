import React from 'react';
import styled from 'styled-components';
import { ContainerColumn } from '../CommonStyle';
import AddEvent from './AddEvent';
import PagingDate from './PagingDate';
import Timetable from './Timetable';

const Calendar = styled.table`
  height: 70vh;
`;

function Day() {
  return (
    <ContainerColumn>
      <AddEvent />
      <Calendar>
        <PagingDate />
        <Timetable />
      </Calendar>
    </ContainerColumn>
  );
}

export default Day;
