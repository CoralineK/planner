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
export const Row = styled.tr``;
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
  background-color: rgba(0,0,0,0);
  color: ${colors.extra};
  cursor: pointer;
  width: 24px;
  height: 24px;
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