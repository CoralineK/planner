import styled from 'styled-components';
import { colors, font } from '../../Constants';

export const ContainerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerRow = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Head = styled.thead``;
export const Body = styled.tbody``;
export const Row = styled.tr`
  display: table;
  width: 910px;
  table-layout: fixed;
`;
export const Arrow = styled.th`
  background-color: ${colors.primary};
  width: 50px;
`;
export const Name = styled.th`
  ${font}
  background-color: ${colors.primary};
  padding: 10px;
  color: white;
`;
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: ${colors.extra};
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
