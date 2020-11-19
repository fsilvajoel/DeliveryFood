import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
// import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalAdress from './modal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Checkbox } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    // whidth : "300px",
    width: '22rem',
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  iconDelete: {
    fontSize: '10px',
  },
}));

export default function AdressCard() {
  const adresses = [
    { name: 'Endereço 1', desc: 'Rua dona Flora, 618', bairro: 'Universitário' },
    // { name: 'Product 2', desc: 'Another thing', price: 'R$3.45' },
    // { name: 'Product 3', desc: 'Something else', price: 'R$6.51' },
    // { name: 'Product 4', desc: 'Best thing of all', price: 'R$14.11' },
  ];
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <>
          <Typography variant="h6" gutterBottom>
            Endereço de Entrega
            <IconButton color="primary" aria-label="Cadastrar novo Endereço" component="span">
              <ModalAdress />
            </IconButton>
          </Typography>
          <List disablePadding>
            {adresses.map((address) => (
              <>
                <ListItem className={classes.listItem} key={address.name}>
                  <Checkbox onChange={'a'} name="jason" />
                  <ListItemText primary={address.name} secondary={address.desc} />
                  <Typography variant="body2">{address.bairro}</Typography>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
          <CardActions style={{ flexDirection: 'row-reverse' }}>
            <Button variant="outlined" size="medium">
              Confirmar
            </Button>
            {/* <Button type="submit" variant="outlined" size="medium">Finalizar</Button> */}
          </CardActions>
          {/* <Grid container spacing={2}> */}
          {/* </Grid> */}
        </>
      </CardContent>
    </Card>
  );
}
