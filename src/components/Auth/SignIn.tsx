import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Submit from '../CommonComponents/ButtonSubmit';
import { useStyles, Box, Title, Switch, Reference } from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/thunks';
import { AUTH_SUCCESS } from '../../redux/auth/actionTypes';
import { AuthAction } from '../../redux/auth/types';

export default function SignIn() {
  const dispatch = useDispatch<any>();
  const [correct, setCorrect] = useState(true);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(user.email, user.password)).then((e: AuthAction) => {
      if (e.type === AUTH_SUCCESS) {
        history.push('/home');
      } else {
        setCorrect(false);
      }
    });
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/');
  };

  return (
    <Box>
      <Title>SIGN IN</Title>
      <form className={classes.root} onSubmit={onSubmit}>
        {correct ? (
          <>
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
          </>
        ) : (
          <>
            <TextField
              error
              required
              id="mail-login"
              label="E-mail"
              type="email"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                setCorrect(true);
              }}
            />
            <TextField
              error
              required
              id="password-login"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              helperText="E-mail or password are not correct"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setCorrect(true);
              }}
            />
          </>
        )}
        <Reference>* is required</Reference>
        <Submit text="Submit" />
      </form>
      <Switch onClick={onClick}>Register</Switch>
    </Box>
  );
}
