import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import ModalProduct from '../../Components/Layout/Modal';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center'
  },
  Description: {
    height: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    Display: '-webkit-box'
    // -webkit-line-clamp: 2,
  }
}));

export default function CardProduct(props) {
  console.log('AISUDH', props);
  const { image, name, description, price } = props.data;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image} title={name} />
      <CardContent
        className={classes.CardContent}
        style={{ minHeight: '250px', height: '260px' }}>
        <h2>{name}</h2>
        <span className={classes.Description}>{description}</span>
        <h3 style={{ color: '#6ba449' }}>R$: {price}</h3>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProduct data={props.data} />
      </CardActions>
    </Card>
  );
}
