import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './TopBar';
import SideBar from './SideBar';
import { getEmail } from '../../redux/auth/selectors';
import { colors } from '../../Constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      backgroundColor: colors.paper,
      width: '100%',
      minHeight: '100vh',
    },
  })
);

type Props = {
  children: React.ReactElement | Array<React.ReactElement>;
};

export default function Navigation({ children }: Props) {
  const userEmail = useSelector(getEmail);
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!userEmail) {
    history.replace('/');
    return null;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        user={userEmail}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
