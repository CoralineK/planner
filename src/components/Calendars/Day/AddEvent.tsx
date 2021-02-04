import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../Constants';
import TextField from '@material-ui/core/TextField';
import TimePicker from '../../CommonComponents/TimePicker';
import ButtonSubmit from '../../CommonComponents/ButtonSubmit';

const Container = styled.div`
  width: 910px;
  background-color: ${colors.extra};
  margin-bottom: 2vh;
  border-radius: 6px;
  padding: 3vh;
  display: flex;
  justify-content: space-between;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

type Event = {
  begin: Date;
  finish: Date;
  location: string;
  title: string;
  exist: boolean;
};

function time(extraTime: number) {
  return new Date(
    new Date().setHours(
      new Date().getHours() + extraTime,
      Math.ceil(new Date().getMinutes() / 5) * 5,
    ),
  );
}

function AddEvent() {
  const [event, setEvent] = useState<Event>({
    begin: time(0),
    finish: time(1),
    location: '',
    title: '',
    exist: false,
  });

  // useEffect(() => {
  //   console.log(event);
  // }, [event]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleOnSetBegin = (date: Date) => {
    setEvent({ ...event, begin: date });
  };

  const handleOnSetFinish = (date: Date) => {
    setEvent({ ...event, finish: date });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TimePicker
          label="Begin"
          onChange={handleOnSetBegin}
          selectedDate={event.begin}
        />
        <TimePicker
          label="Finish"
          onChange={handleOnSetFinish}
          selectedDate={event.finish}
        />
        <TextField
          label="Location"
          name="location"
          style={{ width: '25%' }}
          onChange={handleOnChange}
        ></TextField>
        <TextField
          label="Event"
          name="title"
          style={{ width: '25%' }}
          onChange={handleOnChange}
        ></TextField>
        <ButtonSubmit text="add" />
      </Form>
    </Container>
  );
}

export default AddEvent;
