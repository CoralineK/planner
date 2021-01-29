import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarSolid from '../Icons/CalendarSolid';
import CalendarAltSolid from '../Icons/CalendarAltSolid';
import CalendarWeekSolid from '../Icons/CalendarWeekSolid';
import CalendarDaySolid from '../Icons/CalendarDaySolid';
import { colors } from '../../Constants';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      color: colors.extra,
      fontSize: 20,
    },
  })
);

const Link = styled.a`
  text-decoration: none;
  &:active {
    color: pink;
  }
`;

export default function ListOfCalendars() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Divider />
      <List>
        <Link onClick={() => history.push('/fullyear')}>
          <ListItem button key="Full year">
            <ListItemIcon>
              <CalendarSolid />
            </ListItemIcon>
            <ListItemText
              primary="Full year"
              primaryTypographyProps={{ className: classes.item }}
            />
          </ListItem>
        </Link>
        <Link onClick={() => history.push('/month')}>
          <ListItem button key="Month">
            <ListItemIcon>
              <CalendarAltSolid />
            </ListItemIcon>
            <ListItemText
              primary="Month"
              primaryTypographyProps={{ className: classes.item }}
            />
          </ListItem>
        </Link>
        <Link onClick={() => history.push('/week')}>
          <ListItem button key="Week">
            <ListItemIcon>
              <CalendarWeekSolid />
            </ListItemIcon>
            <ListItemText
              primary="Week"
              primaryTypographyProps={{ className: classes.item }}
            />
          </ListItem>
        </Link>
        <Link onClick={() => history.push('/day')}>
          <ListItem button key="Day">
            <ListItemIcon>
              <CalendarDaySolid />
            </ListItemIcon>
            <ListItemText
              primary="Day"
              primaryTypographyProps={{ className: classes.item }}
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </>
  );
}
