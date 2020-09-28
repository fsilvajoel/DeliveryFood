import React from 'react';
import { Card, CardContent, CardActions } from "@material-ui/core/";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { List, ListItemText, ListItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';

export default function CardPaymentMethod() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
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
            {/* <Divider /> */}
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
          {/* <Button type="submit" variant="outlined" size="small">Confirma</Button> */}
        </CardContent>
        <CardActions style={{ flexDirection: "row-reverse" }}>
          <Button type="submit" variant="outlined" size="small">Confirma</Button>
        </CardActions>
      </form>
    </Card>
  );
}
