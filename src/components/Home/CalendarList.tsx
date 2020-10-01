import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CalendarSolid from '../Icons/CalendarSolid';
import CalendarAltSolid from '../Icons/CalendarAltSolid';
import CalendarWeekSolid from '../Icons/CalendarWeekSolid';
import CalendarDaySolid from '../Icons/CalendarDaySolid';
import { colors } from '../../Theme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      color: colors.extra,
      fontSize: 20,
    },
  })
);

export default function ListOfCalendars() {
  const classes = useStyles();

  return (
    <>
      <Divider />
      <List>
        <ListItem button key="Full year">
          <ListItemIcon>
            <CalendarSolid />
          </ListItemIcon>
          <ListItemText
            primary="Full year"
            primaryTypographyProps={{ className: classes.item }}
          />
        </ListItem>
        <ListItem button key="Month">
          <ListItemIcon>
            <CalendarAltSolid />
          </ListItemIcon>
          <ListItemText
            primary="Month"
            primaryTypographyProps={{ className: classes.item }}
          />
        </ListItem>
        <ListItem button key="Week">
          <ListItemIcon>
            <CalendarWeekSolid />
          </ListItemIcon>
          <ListItemText
            primary="Week"
            primaryTypographyProps={{ className: classes.item }}
          />
        </ListItem>
        <ListItem button key="Day">
          <ListItemIcon>
            <CalendarDaySolid />
          </ListItemIcon>
          <ListItemText
            primary="Day"
            primaryTypographyProps={{ className: classes.item }}
          />
        </ListItem>
      </List>
      <Divider />
    </>
  );
}
