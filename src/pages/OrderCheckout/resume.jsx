import React from 'react';
import CardDeliveryMethod from '../../Components/CardsCheckout/CardDeliveryMethod';
import CardPaymentMethod from '../../Components/CardsCheckout/CardPaymentMethod';
import Grid from '@material-ui/core/Grid';

export default function PaymentForm() {
  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={6} xs={12}>
          <CardPaymentMethod />
        </Grid>
        <Grid item sm={6} xs={12}>
          <CardDeliveryMethod />
        </Grid>
      </Grid>
    </>
  );
}
