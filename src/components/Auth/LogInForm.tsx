import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signInUser } from '../../services/firebase';
import { ButtonContainer, useStyles } from './style';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSuccess, authError, authLoading } from '../../redux/auth/action';

export default function SignIn() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const classes = useStyles();
  const history = useHistory();

  // @ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoading());
    signInUser(user.email, user.password)
      .then((response) => {
        if (!response.user?.email || !response.user?.uid) {
          return;
        }

        dispatch(authSuccess(response.user.email, response.user.uid));
        history.push('/home');
      })
      .catch((e) => {
        dispatch(authError(e.message));
      });
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={onSubmit}>
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
      <ButtonContainer>
        <Button className={classes.button} variant="contained" type="submit">
          SUBMIT
        </Button>
      </ButtonContainer>
    </form>
  );
}
