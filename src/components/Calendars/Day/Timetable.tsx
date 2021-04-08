import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, font } from '../../../Constants';

const Container = styled.div`
  height: 60vh;
  overflow: auto;
`;

const Body = styled.tbody`
  height: 50vh;
  overflow: auto;
`;
const Row = styled.tr`
  height: 24px;
`;
const Hour = styled.th`
  ${font}
  font-size: 15px;
  width: 50px;
  background-color: ${colors.background};
  box-shadow: inset 0 0 0 0.75px ${colors.extra};
  // border: 0.75px solid ${colors.extra};
  text-align: center;
`;

const Box = styled.td`
  width: 860px;
  height: 24px;
  box-shadow: inset 0 0 0 0.75px ${colors.extra};
  // border: 0.75px solid ${colors.extra};
  background-color: ${colors.background};
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
