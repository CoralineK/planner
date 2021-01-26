import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, font } from '../../../Constants';
import { Body, Row } from '../CommonStyle';

const Hour = styled.td`
  ${font}
  font-size: 15px;
  width: 50px;
  padding: 5px;
  background-color: ${colors.background};
  border: 0.75px solid ${colors.extra};
  text-align: center;
`;
const Box = styled.td`
  width: 860px;
  border: 0.75px solid ${colors.extra};
  background-color: ${colors.background};
`;

function Timetable() {
  const [start, setStart] = useState<number>(6);
  const [end, setEnd] = useState<number>(22);

  function format(number: number) {
    if (number > 9) {
      return `${number}:00`;
    } else {
      return `0${number}:00`;
    }
  }

  const hours: React.ReactElement[] = [];
  for (let i: number = start; i <= end; i++) {
    hours.push(<Hour colSpan={1}>{format(i)}</Hour>);
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
