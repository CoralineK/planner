import styled from 'styled-components';
import { colors } from '../../../Theme';

export const Calendar = styled.table`
  height: 70vh;
`;
export const Hour = styled.td`
  width: 50px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  padding: 5px;
  background-color: ${colors.background};
  border: 0.75px solid ${colors.extra};
  text-align: center;
`;
export const Box = styled.td`
  width: 860px;
  border: 0.75px solid ${colors.extra};
  background-color: ${colors.background};
`;
// export const Notes = styled.textarea`
//   display: flex;
//   background-color: ${colors.background};
//   outline: none;
//   border: none;
//   width: 100%;
//   padding: 0 5px;
//   resize: none;
//   font-family: Roboto;
//   font-size: 15px;
// `;
export const Date = styled.th`
  background-color: ${colors.paper};
  border: 0.75px solid ${colors.extra};
  padding: 10px;
  font-family: Roboto Slab;
  font-weight: 400;
  font-size: 20px;
`;
export const AddEvent = styled.div`
  width: 910px;
  height: 15vh;
  background-color: ${colors.extra};
  margin-bottom: 2vh;
  border-radius: 6px;
`;