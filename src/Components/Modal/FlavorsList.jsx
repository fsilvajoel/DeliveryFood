import { CardActions, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'

import Button from "@material-ui/core/Button";
// import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { setNewProduct } from '../../Redux/Store/CheckoutCart/CheckoutCart'
import { useForm } from 'react-hook-form';

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
  iconDelete: {
    fontSize: "10px",
  }
}));

export default function FlavorsList(props) {
  const dispatch = useDispatch()

  const { product } = props

  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    let flavor = JSON.parse(data.flavor)
    let SelectedProduct = {
      'name': product.name,
      'description': product.description,
      'image': product.image,
      'price': product.price,
      'flavor': flavor,
      'totalPrice': (Number(product.price) + Number(flavor.value)).toFixed(2)
    };
    // console.log(SelectedProduct)
    dispatch(setNewProduct(SelectedProduct))
    props.modal()

  }
  // console.log('console', useSelector((data) => data.checkoutCartStore.shoppingCart));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <List disablePadding>
          {product?.flavors.map((flavor, key) => (
            <>
              <ListItem className={classes.listItem} key={key}>
                <ListItemText primary={flavor.name} secondary={`+R$: ${flavor.sizes[0].value}`} />
                <input
                  type="radio"
                  placeholder="flavors"
                  name='flavor'
                  value={`{"sabor":"${flavor.name}","value": ${flavor.sizes[0].value}}`}
                  ref={register}
                />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <CardActions style={{ flexDirection: "row-reverse" }}>
          <Button type="submit" variant="outlined" size="medium">Finalizar</Button>
        </CardActions>
      </CardContent>
    </form>
  );
}
