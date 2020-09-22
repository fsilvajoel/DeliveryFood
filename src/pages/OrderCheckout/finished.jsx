import React from 'react';
import Typography from '@material-ui/core/Typography';
// import { Container } from './styles';

function Finished() {
  return (
    <>
      <Typography gutterBottom variant="h5">
        Thank you for your order.
  </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order
        confirmation, and will send you an update when your order has
        shipped.
  </Typography>
    </>
  );
}

export default Finished;
