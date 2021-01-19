import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Head, Row } from '../CommonStyle';
import DayName from './DayName';
import Date from './Date';
import ArrowSign from './ArrowSign';

function PagingDate() {
  const [day, setDay] = useState(dayjs());
  const [dayIndex, setDayIndex] = useState(day.day());

  function previousClick() {
    setDay(day.subtract(1, 'day'));
    setDayIndex(day.day());
  }
  function nextClick() {
    setDay(day.add(1, 'day'));
    setDayIndex(day.day());
  }

  return (
    <Head>
      <Row>
        <ArrowSign onClick={previousClick} move={'previous'} />
        <DayName dayIndex={dayIndex} />
        <ArrowSign onClick={nextClick} move={'next'} />
      </Row>
      <Date day={day} />
    </Head>
  );
}

export default PagingDate;
