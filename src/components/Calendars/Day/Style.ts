import styled from 'styled-components';
import { colors } from '../../../Theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const Calendar = styled.table`
  height: 85vh;
  margin-left: 50px;
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
  width: 600px;
  border: 0.75px solid ${colors.extra};
  background-color: ${colors.background};
`;
export const Date = styled.th`
  background-color: ${colors.paper};
  border: 0.75px solid ${colors.extra};
  padding: 10px;
  font-family: Roboto Slab;
  font-weight: 400;
  font-size: 20px;
`;
export const EventContainer = styled.div`
  background-color: ${colors.extra};
  margin-bottom: 2vh;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  align-items: flex-end;
`;
export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
