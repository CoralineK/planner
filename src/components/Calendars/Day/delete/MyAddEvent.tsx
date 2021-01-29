import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Begin, Finish, Place, Event } from '../Inputs';
import { Form, FormRow, Column } from '../Style';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { eventsRef } from '../../../../services/firebase';
import { getId } from '../../../../redux/auth/selectors';
import { v4 as random } from 'uuid';

const Submit = styled.div`
  margin-left: 50px;
`;

type TimeProps = {
  year: number;
  month: number;
  day: number;
};

export default function AddEvent({ year, month, day }: TimeProps) {
  const [begin, setBegin] = useState(`${new Date().getHours() + 1}:00`);
  const [finish, setFinish] = useState(
    `${new Date().getHours() === 23 ? '01' : new Date().getHours() + 2}:00`
  );

  const beginArr = begin.split(':').map((e) => parseInt(e));
  const finishArr = finish.split(':').map((e) => parseInt(e));

  const beginMilisec = new Date(
    year,
    month,
    day,
    beginArr[0],
    beginArr[1]
  ).getTime();
  const finishMilisec = new Date(
    year,
    month,
    beginArr[0] === 23 ? day + 1 : day,
    finishArr[0],
    finishArr[1]
  ).getTime();

  const [location, setLocation] = useState('');
  const [event, setEvent] = useState('');

  const userId = useSelector(getId);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    eventsRef
      .doc(random())
      .set({ userId, begin: beginMilisec, finish: finishMilisec, place: location, event })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  }

  return (
    <Form onSubmit={onSubmit}>
      <Column>
        <FormRow>
          <Begin onChange={(e) => setBegin(e.target.value)} begin={begin} />
          <Finish onChange={(e) => setFinish(e.target.value)} finish={finish} />
        </FormRow>
        <Place onChange={(e) => setLocation(e.target.value)} />
        <Event onChange={(e) => setEvent(e.target.value)} />
      </Column>
      <Submit>
        <Button type="submit" variant="outlined">
          Add event
        </Button>
      </Submit>
    </Form>
  );
}
