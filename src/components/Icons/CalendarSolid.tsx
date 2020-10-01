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

export default function CalendarSolid() {
  return (
    <Svg viewBox="0 0 448 512">
      <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
    </Svg>
  );
}
