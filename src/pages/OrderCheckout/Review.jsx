import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid';
import CardPaymentMethod from '../../Components/OrderCheckout/cardPaymentMethod';
// import { Card } from '@material-ui/core'

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['rua dona flora, 618 unversitário santa cruz do sul, complemento ap 402'];
// const payments = [
//   { name: 'Card type', detail: 'Visa' },
//   { name: 'Card holder', detail: 'Mr John Smith' },
//   { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
//   { name: 'Expiry date', detail: '04/2024' },
// ]

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Revisão e Finalização
      </Typography>
      {/* <Grid container spacing={2}> */}
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Dados do Cliente
        </Typography>
        <Typography gutterBottom>John Smith</Typography>
        <Typography gutterBottom>{addresses}</Typography>
      </Grid>
      <Grid item container direction="column" xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Revisão e Finalização
        </Typography>
        <Typography gutterBottom>Nome: John Smith</Typography>
        <Typography gutterBottom>Endereço: {addresses}</Typography>
        <Typography gutterBottom>Forma de pagamento: crédito</Typography>
        <Typography gutterBottom>Retirada: Delivery</Typography>
        {/* <Typography variant="h6" gutterBottom className={classes.title}>
          Detalhes do Pagamento
        </Typography> */}
        <Grid container>
          <CardPaymentMethod />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
}
