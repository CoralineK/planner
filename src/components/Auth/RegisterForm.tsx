import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createAccount } from '../../services/firebase';
import { ButtonContainer, useStyles } from './style';

export default function SignUp() {
  const [user, setUser] = useState({
    id: 0,
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [correct, setCorrect] = useState(true);

  const classes = useStyles();

  // @ts-ignore
  const onSubmit = (e) => {
    e.preventDefault();
    user.password === user.repeatPassword &&
      createAccount(user.email, user.password);
    user.password === user.repeatPassword
      ? setCorrect(true)
      : setCorrect(false);
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      <TextField
        required
        id="mail"
        label="E-mail"
        type="email"
        variant="outlined"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      {correct === true ? (
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
            id="set-password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextField
            error
            id="repeat-set-password-error"
            label="Repeat password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            helperText="Passwords are not the same"
            onChange={(e) =>
              setUser({ ...user, repeatPassword: e.target.value })
            }
          />
        </>
      )}

      <ButtonContainer>
        <Button className={classes.button} variant="contained" type="submit">
          SUBMIT
        </Button>
      </ButtonContainer>
    </form>
  );
}
