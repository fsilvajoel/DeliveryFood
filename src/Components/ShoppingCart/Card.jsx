import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardActions } from "@material-ui/core/";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

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

  const products = [
    { name: 'Product 1', desc: 'A nice thing', price: 'R$9.99' },
    { name: 'Product 2', desc: 'Another thing', price: 'R$3.45' },
    { name: 'Product 3', desc: 'Something else', price: 'R$6.51' },
    { name: 'Product 4', desc: 'Best thing of all', price: 'R$14.11' },
  ];
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <>
          <h2>
            Sacola de pedidos
      </h2>
          <List disablePadding>
            {products.map((product) => (
              <>
                <ListItem className={classes.listItem} key={product.name}>
                  <IconButton className={classes.iconDelete} aria-label="delete"><DeleteIcon /></IconButton>
                  <ListItemText primary={product.name} secondary={product.desc} />
                  <p>{product.price}</p>
                </ListItem>
                <Divider />
              </>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                R$34.06
          </Typography>
            </ListItem>
          </List>
        </>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="medium">Finalizar</Button>
      </CardActions>
    </Card>
  );
}
