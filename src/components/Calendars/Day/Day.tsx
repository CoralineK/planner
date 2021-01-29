import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Hour, EventContainer, Container } from './Style';
import AddEvent from './AddEvent';
import DaySchedule from './DaySchedule';

const hours: React.ReactElement[] = [];
for (let i: number = 0; i <= 23; i++) {
  hours.push(<Hour colSpan={1}>{i < 10 ? `0${i}:00` : `${i}:00`}</Hour>);
}

export default function Day() {
  const [day, setDay] = useState(dayjs().day());
  const [date, setDate] = useState({
    day: dayjs().date(),
    month: dayjs().month() + 1,
    year: dayjs().year(),
  });

  return (
    <Container>
      <EventContainer>
        <AddEvent year={date.year} month={dayjs().month()} day={date.day} />
      </EventContainer>
      <DaySchedule />
    </Container>
  );
}
