import React from 'react';
import { Name, ContainerRow } from '../CommonStyle';

const DAYSOFWEEK = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
];

type Props = {
  dayIndex: number;
};

function DayName({ dayIndex }: Props) {
  return <Name colSpan={5}>{DAYSOFWEEK[dayIndex]}</Name>;
}

export default DayName;
