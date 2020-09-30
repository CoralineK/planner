import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

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
    button: {
      backgroundColor: '#80005d',
      color: 'white',
      fontSize: 18,
      '&:hover': {
        backgroundColor: '#c4008f',
      },
    },
  })
);
