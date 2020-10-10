import styled from 'styled-components';
import { colors } from '../../Theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Head = styled.thead``;
export const Body = styled.tbody``;
export const Row = styled.tr``;
export const Arrow = styled.th`
  background-color: ${colors.primary};
  width: 50px;
`;
export const Name = styled.th`
  background-color: ${colors.primary};
  font-family: Roboto Slab;
  font-weight: 400;
  letter-spacing: 1.5px;
  font-size: 20px;
  padding: 10px;
  color: white;
`;
const Button = styled.button`
  outline: none;
  border: none;
  background-color: rgba(0,0,0,0);
  color: ${colors.extra};
  cursor: pointer;
  `;
export const Previous = styled(Button)``;
export const Next = styled(Button)``;