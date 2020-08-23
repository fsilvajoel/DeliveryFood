import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModalBody from './ModalBody'
import { makeStyles } from '@material-ui/core/styles';


export default function ModalProduct(props) {
  const { Name, Media, image, title, description } = props

  // getModalStyle is not a pure function, we roll the style only on the first render
  const getModalStyle = () => {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
  }
  // const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '80vh',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    img: {
      height: '30vh'
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
      // aria-labelledby="simple-modal-title"
      // aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          {Name}
          {Media}
          {image}
          {title}
          {description}
          <h2 id="simple-modal-title">Text in a modal</h2>
          {/* <button onClick={props.actived}>Fechar modal</button> */}
          <p id="simple-modal-description">
            <img style={{ width: "300px" }} src={image} />
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
        </div>
      </Modal>
    </div>
  );
}
