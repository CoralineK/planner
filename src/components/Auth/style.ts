import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
  })
);
