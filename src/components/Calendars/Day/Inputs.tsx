import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      width: 200,
    },
    event: {
      width: 420,
      marginTop: 5,
    },
  })
);

type BeginProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  begin: string;
};

export function Begin({ onChange, begin }: BeginProps) {
  const classes = useStyles();
  return (
    <>
      <TextField
        id="time"
        label="Begin"
        type="time"
        defaultValue={begin}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300,
        }}
        onChange={onChange}
      />
    </>
  );
}

type FinishProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  finish: string;
};

export function Finish({ onChange, finish }: FinishProps) {
  const classes = useStyles();
  return (
    <TextField
      id="time"
      label="Finish"
      type="time"
      defaultValue={finish}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 300,
      }}
      onChange={onChange}
    />
  );
}

type LocationProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Place({ onChange }: LocationProps) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.event}
      id="location"
      label="Location"
      onChange={onChange}
    />
  );
}

type EventProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Event({ onChange }: EventProps) {
  const classes = useStyles();
  return (
    <TextField
      className={classes.event}
      id="event"
      label="Event"
      onChange={onChange}
    />
  );
}
