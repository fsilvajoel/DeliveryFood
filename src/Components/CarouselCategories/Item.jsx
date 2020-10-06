import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentCategory } from '../../Redux/Store/Products/ProductsDucks'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: 150,
      height: 150
    }
  },
  img: {
    display: '-webkit-flex',
    alignContent: 'center',
    height: '100px',
    width: '100px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '25px',
    marginTop: '10px',
    borderRadius: '50%',
    userDrag: 'none'
  },
  title: {
    textAlign: 'center',
    fontSize: '16px',
    paddingLeft: '35px'
  },
  card: {
    borderRadius: '4px',
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);'
  }
}));
const Item = (props) => {
  const dispatch = useDispatch()
  const { img, title, link } = props;
  const classes = useStyles();

  function handleSelect(data) {
    dispatch(setCurrentCategory(data))
  }

  return (
    <>
      <div className={classes.root} onClick={() => handleSelect(link)}>
        <div className={classes.card}>
          <img className={classes.img} src={img} alt={title} />
          <span className={classes.title}>{title}</span>
        </div>
      </div>
    </>
  );
};

export default Item;
