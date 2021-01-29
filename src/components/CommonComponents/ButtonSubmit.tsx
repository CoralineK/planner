import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { colors } from '../../Constants';

const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

type Props = {
  text: string;
};

function Submit({ text }: Props) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        backgroundColor: colors.primary,
        color: 'white',
        fontSize: 18,
        '&:hover': {
          backgroundColor: colors.change,
        },
      },
    }),
  );

  const classes = useStyles();
  return (
    <ButtonContainer>
      <Button className={classes.button} variant="contained" type="submit">
        {text}
      </Button>
    </ButtonContainer>
  );
}

export default Submit;
