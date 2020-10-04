import React, { useState } from 'react';
import { Card, CardContent, CardActions } from "@material-ui/core/";
// import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { List, ListItemText, ListItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { setPayment } from '../../Redux/Store/CheckoutCart/CheckoutCart'
import { useDispatch, useSelector } from 'react-redux'

export default function CardPaymentMethod() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [check, setCheck] = useState(false)
  const dispatch = useDispatch()
  const onSubmit = data => {
    dispatch(setPayment(data))
    console.log(data);
    setCheck(true);
  }
  console.log(errors);

  return (
    <Card >
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <List disablePadding>
            <ListItem>
              <input name="PaymentMethod" type="radio" value="money" ref={register({ required: true })} />
              <ListItemText primary="Dinheiro" />
            </ListItem>
            <ListItem>
              <input name="PaymentMethod" type="radio" value="credit" ref={register({ required: true })} />
              <ListItemText primary="Credito" />
            </ListItem>
            <ListItem>
              <input name="PaymentMethod" type="radio" value="debit" ref={register({ required: true })} />
              <ListItemText primary="Debito" />
            </ListItem>
            {watch("PaymentMethod") === "money" &&
              <>
                <div style={{ textAlign: "center", display: "flex" }}>
                  <h4>Precisa troco? Para quanto?</h4>
                  <ListItem>
                    <input name="changeValue" type="number" ref={register} />
                  </ListItem>
                </div>
              </>
            }
          </List>
        </CardContent>
        <CardActions style={{ flexDirection: "row-reverse" }}>
          <Button type="submit" variant="outlined" size="small">Confirma</Button>
          {check === true &&
            <CheckCircleIcon color="action" />
          }
        </CardActions>
      </form>
    </Card>
  );
}
