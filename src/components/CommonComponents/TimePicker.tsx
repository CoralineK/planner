import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

type Props = {
  label: string;
  onChange: (date: any) => void;
  selectedDate: Date;
};

function TimePicker({ label, onChange, selectedDate }: Props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        style={{ width: '15%' }}
        label={label}
        value={selectedDate}
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default TimePicker;
