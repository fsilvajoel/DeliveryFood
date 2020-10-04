import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { Divider } from '@material-ui/core';
import FlavorsList from './FlavorsList';
import Modal from '@material-ui/core/Modal';
// import ModalBody from './ModalBody'
import { makeStyles } from '@material-ui/core/styles';

export default function ModalProduct(props) {
  const { name, obs, image, price, description, flavors } = props.data

  // getModalStyle is not a pure function, we roll the style only on the first render
  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      display: 'flex',
      flexDirection: 'row-reverse',
      textAlign: "center",
      border: "none"
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '90vh',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    img: {
      height: '30vh'
    },
    button: {
      height: '36px',
      position: 'absolute',
      border: "none",
      backgroundColor: "#fff",
    },
    simpleModal: {
      height: '100%',
      width: '100%',
    },
    content: {
      textAlign: "justify"
    },
    titleFlavors: {
      fontWeight: "300",
      fontSize: "1.6rem",
    },
    price: {
      color: "#2cb74a",
      fontSize: "1.5rem",
    },
    titleProduct: {
      fontSize: "2rem",
      fontWeight: "300",
    },
    descriptionProduct: {
      fontSize: "1rem",
      fontWeight: "100",
      textAlign: "justify",
    }
  }));


  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const actived = () => {
    setActive(!active);
  };

  return (
    <div>
      <Button size="small" onClick={actived} color="primary">
        Ver
        </Button>
      <Modal
        open={active}
        onClose={actived}
      >
        <div key='modal' style={modalStyle} className={classes.paper}>
          <button className={classes.button} onClick={actived}><CloseIcon /></button>
          <div id="simple-modal-description" className={classes.simpleModal}>
            <img style={{ width: "300px" }} src={image} />
            <div className={classes.content}>
              <h2 className={classes.titleProduct} id="simple-modal-title">{name}</h2>
              <p className={classes.descriptionProduct}>{description}</p>
              <Divider />
              <h3 className={classes.price}>R$: {price}</h3>
              <h2 className={classes.titleFlavors}>SABORES</h2>
              <FlavorsList modal={actived} product={props.data} />
            </div>
          </div>
        </div>
      </Modal >
    </div >
  );
}
