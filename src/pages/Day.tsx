import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ContainerColumn } from '../components/Calendars/CommonStyle';
import AddEvent from '../components/Calendars/Day/AddEvent';
import PagingDate from '../components/Calendars/Day/PagingDate';
import Timetable from '../components/Calendars/Day/Timetable';
import Event from '../components/Calendars/Day/Event';
import { colors } from '../Constants';
import { getEvents } from '../services/events';

const Calendar = styled.table`
  position: relative;
  box-shadow: inset 0 0 0 0.75px ${colors.extra};
`;

function Day() {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <ContainerColumn>
      <AddEvent />
      <Calendar>
        <PagingDate />
        <Timetable />
        <Event />
      </Calendar>
    </ContainerColumn>
  );
}

export default Day;
