import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { colors, font } from '../../../Constants';
import { Row } from '../CommonStyle';

const Container = styled.th`
  ${font}
  background-color: ${colors.paper};
  box-shadow: inset 0 0 0 0.75px ${colors.extra};
  // border: 0.75px solid ${colors.extra};
  padding: 10px;
`;

type Props = {
  day: dayjs.Dayjs;
};

function Date({ day }: Props) {
  const [date, setDate] = useState(day.date());
  const [month, setMonth] = useState(day.month() + 1);
  const [year, setYear] = useState(day.year());

  useEffect(() => {
    setDate(day.date());
    setMonth(day.month() + 1);
    setYear(day.year());
  }, [day]);

  function format(number: number) {
    if (number > 9) {
      return number;
    } else {
      return `0${number}`;
    }
  }

  return (
    <Row>
      <Container colSpan={7}>
        {format(date)}.{format(month)}.{year}
      </Container>
    </Row>
  );
}

export default Date;
