import React from 'react';
import styled from 'styled-components';
import { ContainerColumn } from '../components/Calendars/CommonStyle';
import AddEvent from '../components/Calendars/Day/AddEvent';
import PagingDate from '../components/Calendars/Day/PagingDate';
import Timetable from '../components/Calendars/Day/Timetable';

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
