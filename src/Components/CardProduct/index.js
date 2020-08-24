import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import ModalProduct from '../../Components/Layout/Modal';

export default function CardProduct(props) {
  const { Name, Media, image, title, description } = props;
  console.log('props', props);
  return (
    <Card className={props.Name}>
      <CardMedia
        className={props.Media}
        image={props.image}
        title={props.title}
      />
      <CardContent className={props.Content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <ModalProduct
          description={description}
          image={image}
          Media={Media}
          Name={Name}
          title={title}
        />
        <Button size="small" color="primary">
          Ver
        </Button>
        <Button size="small" color="primary">
          pedir
        </Button>
      </CardActions>
    </Card>
  );
}
