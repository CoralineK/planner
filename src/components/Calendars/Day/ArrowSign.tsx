import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Arrow, Button, ContainerRow } from '../CommonStyle';

type Props = {
  onClick: any;
  move: string;
};

function ArrowSign({ onClick, move }: Props) {
  return (
    <Arrow colSpan={1}>
      <ContainerRow>
        <Button onClick={onClick}>
          {move === 'previous' && <ArrowBack />}
          {move === 'next' && <ArrowForward />}
        </Button>
      </ContainerRow>
    </Arrow>
  );
}

export default ArrowSign;
