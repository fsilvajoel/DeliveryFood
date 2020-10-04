import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import ModalProduct from '../Modal'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'center',
  },
  description: {
    height: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    Display: '-webkit-box',
    textAlign: 'justify',
  },
  cardTitle: {
    fontWeight: '300',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  price: {
    fontWeight: '300',
    color: '#2cb74a',
    fontSize: '1.1rem',
  },
}))

export default function CardProduct(props) {
  const { image, name, description, price } = props.data
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image} title={name} />
      <CardContent className={classes.CardContent} style={{ minHeight: '250px', height: '260px' }}>
        <h2 className={classes.cardTitle}>{name}</h2>
        <span className={classes.description}>{description}</span>
        <h3 className={classes.price}>R$: {price}</h3>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProduct data={props.data} />
      </CardActions>
    </Card>
  )
}
