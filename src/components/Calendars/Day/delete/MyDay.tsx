import React, { useState } from 'react';
import dayjs from 'dayjs';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Calendar, Hour, Box, Date, EventContainer, Container } from '../Style';
import { Head, Body, Row, Name, Arrow, Previous, Next } from '../../CommonStyle';
import AddEvent from '../AddEvent';
import DayPage from '../DaySchedule';

const DAYSOFWEEK = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

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

  function previousClick() {
    if (day > 0) {
      setDay(day - 1);
      setDate({ ...date, day: date.day - 1 });
    } else {
      setDay(6);
      setDate({ ...date, day: date.day + 1 });
    }
  }
  function nextClick() {
    if (day < 6) {
      setDay(day + 1);
      setDate({ ...date, day: date.day + 1 });
    } else {
      setDay(0);
      setDate({ ...date, day: date.day + 1 });
    }
  }

  return (
    <Container>
      <EventContainer>
        <AddEvent year={date.year} month={dayjs().month()} day={date.day} />
      </EventContainer>
      <Calendar>
        <Head>
          <Row>
            <Arrow colSpan={1}>
              <Previous onClick={previousClick}>
                <ArrowBack />
              </Previous>
            </Arrow>
            <Name colSpan={5}>{DAYSOFWEEK[day]}</Name>
            <Arrow colSpan={1}>
              <Next onClick={nextClick}>
                <ArrowForward />
              </Next>
            </Arrow>
          </Row>
          <Row>
            <Date colSpan={7}>{`${date.day > 9 ? date.day : `0${date.day}`}.${
              date.month
            }.${date.year}`}</Date>
          </Row>
        </Head>
        <Body>
          {hours.map((hour, i) => (
            <Row key={i}>
              {hour}
              <Box colSpan={6}></Box>
            </Row>
          ))}
        </Body>
      </Calendar>
    </Container>
  );
}
