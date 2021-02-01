import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { colors } from '../../Constants';

const drawerWidth = 240;

const TopItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Login = styled.div`
  display: flex;
  align-items: center;
`;
const User = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  padding-left: 10px;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: colors.extra,
      color: colors.primary,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    title: {
      fontFamily: 'Roboto Slab',
    },
  }),
);

type Props = {
  handleDrawerOpen: any;
  open: boolean;
  user: string;
};

export default function TopBar({ handleDrawerOpen, open, user }: Props) {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <TopItems>
          <Typography variant="h5" noWrap className={classes.title}>
            LOVELY PLANNER
          </Typography>
          <Login>
            <AccountCircleIcon />
            <User>{user}</User>
          </Login>
        </TopItems>
      </Toolbar>
    </AppBar>
  );
}
