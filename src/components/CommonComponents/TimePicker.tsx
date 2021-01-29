import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

type Props = {
  label: string;
  extraTime: number;
  name: string;
  onChange: any;
};

function TimePicker({ label, extraTime, name, onChange }: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(
      new Date().setHours(
        new Date().getHours() + extraTime,
        Math.ceil(new Date().getMinutes() / 5) * 5,
      ),
    ),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange();
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        style={{ width: '15%' }}
        label={label}
        name={name}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

export default TimePicker;
