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
  begin?: Date;
  finish?: Date;
  location: string;
  title: string;
  exist: boolean;
};
function AddEvent() {
  const [event, setEvent] = useState<Event>({
    begin: undefined,
    finish: undefined,
    location: '',
    title: '',
    exist: false,
  });

  useEffect(() => {
    console.log(event);
  }, [event]);

  const handleOnChange = (e: any) => {
    console.log(e.target.name);
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <TimePicker
          label="Begin"
          name="begin"
          extraTime={0}
          onChange={handleOnChange}
        />
        <TimePicker
          label="Finish"
          name="finish"
          extraTime={1}
          onChange={handleOnChange}
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
