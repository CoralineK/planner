import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { colors, font } from '../../Constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '70%',
      '& .MuiTextField-root': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '100%',
      },
    },
  }),
);

export const Box = styled.div`
  width: 500px;
  height: 500px;
  padding: 50px;
  margin: 50px;
  background-color: ${colors.paper};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px 4px rgba(150, 150, 150, 0.3);
`;

export const Title = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const Reference = styled.p`
  ${font};
  font-size: 12px;
  color: ${colors.primary};
`;

export const Switch = styled.button`
  ${font};
  border: none;
  outline: none;
  color: ${colors.text};
  text-decoration: underline;

  &:hover {
    color: ${colors.change};
    cursor: pointer;
  }
`;
