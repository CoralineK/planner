import React, { useState } from 'react';
import dayjs from 'dayjs';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Calendar, Header, Box, Today } from './Style';
import {
  Container,
  Head,
  Body,
  Row,
  Name,
  Arrow,
  Previous,
  Next,
} from '../CommonStyle';

const DAYSOFWEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MONTHS = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];

export default function Month() {
  const [month, setMonth] = useState(dayjs().month());
  const [firstDay, setFirstDay] = useState(dayjs().date(1).day());
  const [lastDay, setLastDay] = useState(dayjs().endOf('month').date());

  function previousClick() {
    if (month > 0) {
      setMonth(month - 1);
      setFirstDay(
        dayjs()
          .month(month - 1)
          .date(1)
          .day()
      );
      setLastDay(
        dayjs()
          .month(month - 1)
          .endOf('month')
          .date()
      );
    }
  }
  function nextClick() {
    if (month < 11) {
      setMonth(month + 1);
      setFirstDay(
        dayjs()
          .month(month + 1)
          .date(1)
          .day()
      );
      setLastDay(
        dayjs()
          .month(month + 1)
          .endOf('month')
          .date()
      );
    }
  }

  const startBlanks: React.ReactElement[] = [];
  const days: React.ReactElement[] = [];
  const finishBlanks: React.ReactElement[] = [];

  for (let i = 0; i < firstDay; i++) {
    startBlanks.push(
      <Box key={'start' + i} className="calendar-day empty">
        {' '}
      </Box>
    );
  }

  for (let i = 1; i <= lastDay; i++) {
    days.push(
      i === dayjs().date() && dayjs().month() === month ? (
        <Today key={'currentDay'}>{i}</Today>
      ) : (
        <Box key={i} className="calendar-day empty">
          {i}
        </Box>
      )
    );
  }

  const numberOfBoxes = 7 - ((firstDay + lastDay) % 7);

  if (numberOfBoxes < 7) {
    for (let i = 1; i <= numberOfBoxes; i++) {
      finishBlanks.push(
        <Box key={'last' + i} className="calendar-day empty">
          {' '}
        </Box>
      );
    }
  }

  const totalBoxes = [...startBlanks, ...days, ...finishBlanks];
  const rows: any = [];
  let cells: React.ReactElement[] = [];

  totalBoxes.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalBoxes.length - 1) {
      rows.push(cells);
    }
  });

  return (
    <Container>
      <Calendar>
        <Head>
          <Row>
            <Arrow colSpan={1}>
              <Previous onClick={previousClick}>
                <ArrowBack />
              </Previous>
            </Arrow>
            <Name colSpan={5}>{MONTHS[month]}</Name>
            <Arrow colSpan={1}>
              <Next onClick={nextClick}>
                <ArrowForward />
              </Next>
            </Arrow>
          </Row>
          <Row>
            {DAYSOFWEEK.map((day) => {
              return <Header key={day}>{day}</Header>;
            })}
          </Row>
        </Head>
        <Body>
          {rows.map((day: React.ReactElement, i: number) => (
            <Row key={i}>{day}</Row>
          ))}
        </Body>
      </Calendar>
    </Container>
  );
}
