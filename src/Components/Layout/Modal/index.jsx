import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModalBody from './ModalBody'
import { makeStyles } from '@material-ui/core/styles';
import FlavorsList from './FlavorsList';
import { Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


export default function ModalProduct(props) {
  const { name, obs, image, price, description, flavors } = props.data
  // console.log('FLAVORS', props.data)

  // getModalStyle is not a pure function, we roll the style only on the first render
  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      display: 'flex',
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
    },
    simpleModal: {
      height: '100%',
      width: '100%',

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
        <div style={modalStyle} className={classes.paper}>
          <button className={classes.button} onClick={actived}><CloseIcon /></button>
          <div id="simple-modal-description" className={classes.simpleModal}>
            <img style={{ width: "300px" }} src={image} />
            <h2 id="simple-modal-title">{name}</h2>
            <p>
              {description}
            </p>
            <Divider />
            <h3 style={{ color: '#6ba449' }}>R$: {price}</h3>
            <h1>SABORES</h1>
            <FlavorsList flavors={flavors} />
          </div>
          <p>
          </p>
        </div>
      </Modal>
    </div>
  );
}
