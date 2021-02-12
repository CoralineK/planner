import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Submit from '../CommonComponents/ButtonSubmit';
import { createAccount } from '../../services/auth';
import { useStyles, Box, Title, Switch, Reference } from './style';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const [user, setUser] = useState({
    id: 0,
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [correct, setCorrect] = useState(true);

  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    user.password === user.repeatPassword &&
      createAccount(user.email, user.password);
    user.password === user.repeatPassword
      ? setCorrect(true)
      : setCorrect(false);
  };

  const onClick = () => {
    history.push('/login');
  };

  return (
    <Box>
      <Title>REGISTER</Title>
      <form className={classes.root} onSubmit={onSubmit}>
        <TextField
          required
          id="mail"
          label="E-mail"
          type="email"
          variant="outlined"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        {correct ? (
          <>
            <TextField
              required
              id="set-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <TextField
              required
              id="repeat-set-password"
              label="Repeat password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) =>
                setUser({ ...user, repeatPassword: e.target.value })
              }
            />
          </>
        ) : (
          <>
            <TextField
              error
              required
              id="set-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setCorrect(true);
              }}
            />
            <TextField
              error
              required
              id="repeat-set-password-error"
              label="Repeat password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              helperText="Passwords are not the same"
              onChange={(e) => {
                setUser({ ...user, repeatPassword: e.target.value });
                setCorrect(true);
              }}
            />
          </>
        )}
        <Reference>* is required</Reference>
        <Submit text="submit" />
      </form>
      <Switch onClick={onClick}>Log in</Switch>
    </Box>
  );
}
