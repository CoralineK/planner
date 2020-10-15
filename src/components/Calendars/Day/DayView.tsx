import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';

export default function DayPage() {
  const [data, setData] = useState();

  return (
    <Paper>
      <Scheduler data={data}>
        <DayView startDayHour={6} endDayHour={20} />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </Paper>
  );
}
