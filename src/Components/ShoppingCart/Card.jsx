import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions } from "@material-ui/core/";
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch, useSelector } from 'react-redux'
import { DeleteProduct } from '../../Redux/Store/CheckoutCart/CheckoutCart'


const useStyles = makeStyles((theme) => ({
  root: {
    // whidth : "300px",
    width: "18rem",
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
    fontSize: "10px",
  }
}));

export default function SacolaCard() {
  const dispatch = useDispatch()
  const products = useSelector((data) => data.checkoutCartStore.shoppingCart)
  console.log('sacola', products)
  let total = 0
  const dropProduct = (position) => {
    console.log('entrei aqui', position)
    dispatch(DeleteProduct(position))
  }
  const classes = useStyles();

  useEffect(() => {
  }, [useSelector((data) => data.checkoutCartStore.shoppingCart)]);


  return (
    <Card className={classes.root}>
      <CardContent>
        <>
          <h2>
            Sacola de pedidos
      </h2>
          <List disablePadding>
            {products < 1 ?
              <><h2>A sacola está vazia</h2></>
              :
              <>
                {products?.map((product, key) => {
                  total = Number(total) + Number(product.totalPrice)
                  return (
                    <>
                      <ListItem className={classes.listItem} key={product.name}>
                        <IconButton className={classes.iconDelete} onClick={() => dropProduct(key)} aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <h5>{product.totalPrice}</h5>
                      </ListItem>
                      <Divider />
                    </>
                  )
                }
                )}
              </>
            }
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total pedido" />
              <Typography variant="subtitle1" className={classes.total}>
                R${total.toFixed(2)}
              </Typography>
            </ListItem>
          </List>
        </>
      </CardContent>
      <CardActions>
        <Link to="/Checkout">
          <Button ariant="outlined" size="medium">Finalizar</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
