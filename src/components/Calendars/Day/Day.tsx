import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../../../Constants';
import { ContainerColumn, Body, Row } from '../CommonStyle';
import PagingDate from './PagingDate';

const AddEvent = styled.div`
  width: 910px;
  height: 15vh;
  background-color: ${colors.extra};
  margin-bottom: 2vh;
  border-radius: 6px;
`;
const Calendar = styled.table`
  height: 70vh;
`;
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

// const hours: React.ReactElement[] = [];
// for (let i: number = 6; i <= 22; i++) {
//   hours.push(<Hour colSpan={1}>{i < 10 ? `0${i}:00` : `${i}:00`}</Hour>);
// }

export default function Day() {
  return (
    <ContainerColumn>
      <AddEvent></AddEvent>
      <Calendar>
        <PagingDate />
        <Body>
          {/* {hours.map((hour, i) => (
            <Row key={i}>
              {hour}
              <Box colSpan={6}></Box>
            </Row>
          ))} */}
        </Body>
      </Calendar>
    </ContainerColumn>
  );
}
