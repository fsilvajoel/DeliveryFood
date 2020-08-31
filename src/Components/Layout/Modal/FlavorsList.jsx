import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardActions, CardContent, Card } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';

import { useForm } from 'react-hook-form';
// import DeleteIcon from '@material-ui/icons/Delete';
// import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   // whidth : "300px",
  //   width: "18rem",
  // },
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
  const { flavors } = props

  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Card>
      <form onSubmit={handleSubmit.bind(onSubmit)}>
        <CardContent>
          <List disablePadding>
            {flavors.map((flavor, key) => (
              <>
                <ListItem className={classes.listItem} key={key}>
                  <ListItemText primary={flavor.name} secondary={`+R$: ${flavor.sizes[0].value}`} />
                  <input type="checkbox" placeholder="flavors" name={flavor.name} ref={register} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </CardContent>
        <CardActions style={{ flexDirection: "row-reverse" }}>
          <Button type="submit" variant="outlined" size="medium">Finalizar</Button>
        </CardActions>
      </form>
    </Card>
  );
}
