import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircleCheck from './check-circle.gif';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  svg {
    font-size: 200px;
    height: 200px;
    color: #359217;
  }
`;
function Finished() {
  return (
    <>
      <Typography gutterBottom variant="h5">
        Obrigado pelo seu pedido. Ele já encontra-se na cozinha
      </Typography>
      <Icon>
        <img src={CircleCheck} />
      </Icon>
      <Typography variant="subtitle1">
        O código do seu pedido é <b>#2001539</b>. Em breve estará pronto!
      </Typography>
    </>
  );
}

export default Finished;
