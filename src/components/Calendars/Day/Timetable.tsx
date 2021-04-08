import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, font } from '../../../Constants';

const Body = styled.tbody`
  height: 60vh;
  overflow: auto;
  display: block;
  border: 0.75px solid ${colors.extra};
`;

const HourBox = styled.th`
  ${font}
  position: relative;
  width: 50px;
`;

const Hour = styled.div`
  font-size: 12px;
  line-height: 1;
  position: absolute;
  bottom: -5px;
  right: 10px;
`;

const Box = styled.td`
  height: 50px;
  border-bottom: 0.75px solid ${colors.extra};
`;

const Row = styled.tr`
  display: table;
  width: 900px;
  table-layout: fixed;
`;

function Timetable() {
  const [start] = useState<number>(0);
  const [end] = useState<number>(23);

  function format(number: number) {
    if (number > 9) {
      return `${number}:00`;
    } else {
      return `0${number}:00`;
    }
  }

  const hours: React.ReactElement[] = [];
  for (let i: number = start; i <= end; i++) {
    hours.push(
      <HourBox colSpan={1}>
        <Hour>{format(i)}</Hour>
      </HourBox>,
    );
  }

  return (
    <Body>
      {hours.map((hour, i) => (
        <Row key={i}>
          {hour}
          <Box colSpan={6}></Box>
        </Row>
      ))}
    </Body>
  );
}

export default Timetable;
