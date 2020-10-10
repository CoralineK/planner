import styled from 'styled-components';
import { colors } from '../../../Theme';

export const Calendar = styled.table``;
export const Header = styled.th`
  background-color: ${colors.secondary};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
  width: 130px;
  padding: 8px;
  border: 0.75px solid ${colors.extra};
`;
export const Box = styled.td`
  width: 130px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  padding: 15px;
  background-color: ${colors.background};
  border: 0.75px solid ${colors.extra};
  text-align: center;
`;
export const Today = styled(Box)`
  background-color: ${colors.accent};
`;

