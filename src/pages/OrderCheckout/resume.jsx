import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardDeliveryMethod from '../../Components/CardsCheckout/CardDeliveryMethod'
import CardPaymentMethod from '../../Components/CardsCheckout/CardPaymentMethod'
export default function PaymentForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }} >
        Forma de Pagamento
      </Typography>
      <CardPaymentMethod />
      <CardDeliveryMethod />
    </>
  );
}
