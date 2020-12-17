import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid';
// import { Card } from '@material-ui/core'

const addresses = ['rua dona flora, 618 unversitário santa cruz do sul, complemento ap 402'];

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
          Produtos
        </Typography>
        <li>Produto lala lala lala</li>
        <li>Produto lala lala lala</li>
        <li>Produto lala lala lala</li>
        <li>Produto lala lala lala</li>
        <Typography variant="h6" gutterBottom className={classes.title}>
          Complementos
        </Typography>
        <li>Complemento lala lala lala</li>
        <li>Complemento lala lala lala</li>
      </Grid>
      <Grid item container direction="column" xs={12} sm={12}>
        <Typography variant="h6" gutterBottom>
          Revisão e Finalização
        </Typography>
        <Typography gutterBottom>
          <b>Nome:</b> John Smith
        </Typography>
        <Typography gutterBottom>
          <b>Endereço:</b> {addresses}
        </Typography>
        <Typography gutterBottom>
          <b>Forma de pagamento:</b> crédito
        </Typography>
        <Typography gutterBottom>
          <b>Retirada:</b> Delivery
        </Typography>
      </Grid>
    </>
  );
}
