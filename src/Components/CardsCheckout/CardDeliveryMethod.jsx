import React, { useState } from 'react';
import { Card, CardContent, CardActions } from '@material-ui/core/';
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { List, ListItemText, ListItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { setDelivery } from '../../shared/Redux/Store/CheckoutCart/CheckoutCart';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';

export default function DeliveryMethod() {
  const { register, handleSubmit, errors } = useForm();
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(setDelivery(data));
    console.log(data);
    setCheck(true);
  };
  console.log(errors);

  return (
    <Card style={{ height: '400px' }}>
      <Typography variant="h6" gutterBottom style={{ textAlign: 'center', padding: '20px' }}>
        Forma de Entrega
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <List disablePadding>
            <ListItem>
              <input name="DeliveryMethod" type="radio" value="delivery" ref={register({ required: true })} />
              <ListItemText primary="Tele Entrega" />
            </ListItem>
            <ListItem>
              <input name="DeliveryMethod" type="radio" value="withdrawal" ref={register({ required: true })} />
              <ListItemText primary="Retirar no restaurante" />
            </ListItem>
          </List>
        </CardContent>
        <CardActions style={{ flexDirection: 'row-reverse' }}>
          <Button type="submit" variant="outlined" size="small">
            Confirma
          </Button>
          {check === true && <CheckCircleIcon color="action" />}
        </CardActions>
      </form>
    </Card>
  );
}
