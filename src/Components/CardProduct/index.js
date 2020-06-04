import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

export default function CardProduct(props) {
    return (
    	<Card className={props.Name}>
      		<CardMedia
				className={props.Media}
				image={props.image}
				title={props.title}
			/>
    	<CardContent className={props.Content}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: "center"}}>
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
