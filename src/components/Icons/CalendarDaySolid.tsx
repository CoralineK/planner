import React from 'react';
import styled from 'styled-components';
import { colors } from '../../Theme';

const Svg = styled.svg`
  width: 30px;
  margin: 5px;
  fill: #d6d2d2;

  &:hover {
    fill: ${colors.accent};
  }
`;

export default function CalendarDaySolid() {
  return (
    <Svg viewBox="0 0 448 512">
      <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
    </Svg>
  );
}
