import React from 'react';
import { CardActions, CardContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { List, ListItemText, ListItem } from '@material-ui/core';
import './style.scss';
import { makeStyles } from '@material-ui/core/styles';
import { setNewProduct } from '../../Redux/Store/CheckoutCart/CheckoutCart';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
    borderBottom: '1px solid #e8e8e8',
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
  error: {
    textAlign: 'center',
    color: 'red',
  },
}));

export default function FlavorsList(props) {
  const dispatch = useDispatch();

  const { product } = props;

  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    let flavor = JSON.parse(data.flavor);
    let SelectedProduct = {
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price,
      flavor: flavor,
      totalPrice: (Number(product.price) + Number(flavor.value)).toFixed(2),
    };
    dispatch(setNewProduct(SelectedProduct));
    props.modal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
        <List disablePadding>
          {product?.flavors.map((flavor, key) => (
            <>
              <ListItem className={classes.listItem} key={key}>
                <ListItemText
                  className="flavors-list"
                  primary={flavor.name}
                  secondary={`+R$: ${flavor.sizes[0].value}`}
                />
                <input
                  type="radio"
                  placeholder="flavors"
                  name="flavor"
                  value={`{"sabor":"${flavor.name}","value": ${flavor.sizes[0].value}}`}
                  ref={register({ required: true })}
                />
              </ListItem>
            </>
          ))}
          {errors.flavor && <p className={classes.error}>Selecione o sabor desejado</p>}
        </List>
        <CardActions style={{ flexDirection: 'row-reverse' }}>
          <Button type="submit" variant="outlined" size="medium">
            Finalizar
          </Button>
        </CardActions>
      </CardContent>
    </form>
  );
}
