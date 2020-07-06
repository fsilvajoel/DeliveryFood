import React from 'react'
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: 150,
      height: 150
    }
  },
  img: {
    // display: "flex",
    display: "-webkit-flex",
    alignContent: "center",
    height: "100px",
    width: "100px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25px",
    marginTop: "10px",
    borderRadius: "50%"
  },
  title :{
    textAlign: "center",
    fontSize: "16px" 
  }
}));
const Item =(props) =>{
  const {img, title, link} = props;
  const classes = useStyles();
  return(
    //TODO: VER RECURSO DE HREF LINK
  <div className={classes.root}>
    <Paper>
      <img
        className={classes.img}
        src={img}
        alt={title}
      />
      <p className={classes.title}>{title}</p>
    </Paper>
  </div>
  )
}

export default Item;