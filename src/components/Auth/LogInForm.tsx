import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Submit from '../CommonComponents/ButtonSubmit';
import { useStyles } from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/thunks';
import { AUTH_SUCCESS } from '../../redux/auth/actionTypes';

export default function SignIn() {
  const dispatch = useDispatch<any>();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signIn(user.email, user.password)).then((e: any) => {
      if (e.type === AUTH_SUCCESS) {
        history.push('/home');
      }
    });
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <TextField
        required
        id="mail-login"
        label="E-mail"
        type="email"
        variant="outlined"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <TextField
        required
        id="password-login"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <Submit text="Submit" />
    </form>
  );
}
