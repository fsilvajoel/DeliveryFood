import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../../Redux/Store/CheckoutCart/CheckoutCart';
import './style.scss';

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
    fontSize: '10px',
  },
  centerText: {
    textAlign: 'center',
  },
}));

export default function BagCard(props) {
  const { products } = props;
  const dispatch = useDispatch();

  console.log('sacola', products);
  // console.log('Dentro da sacola', products.length);
  let total = 0;
  const dropProduct = (position) => {
    dispatch(DeleteProduct(position));
  };
  const classes = useStyles();

  // useEffect(() => {}, [useSelector((data) => data.checkoutCartStore.shoppingCart)]);

  return (
    <List disablePadding>
      {products < 1 ? (
        <>
          <h3 className={classes.centerText}>A sacola está vazia</h3>
        </>
      ) : (
        <>
          {products?.map((product, key) => {
            total = Number(total) + Number(product.totalPrice);
            return (
              <>
                <ListItem className={classes.listItem} key={product.name}>
                  <IconButton className={classes.iconDelete} onClick={() => dropProduct(key)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <h5 className="product-price">{product.totalPrice}</h5>
                </ListItem>
                <Divider />
              </>
            );
          })}

          <ListItem className={classes.listItem}>
            <ListItemText className="resume" primary="Total pedido" />
            <Typography variant="subtitle1" className={classes.total}>
              R${total.toFixed(2)}
            </Typography>
          </ListItem>
        </>
      )}
    </List>
  );
}
