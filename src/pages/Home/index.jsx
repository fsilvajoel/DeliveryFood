import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
//api
import { getAllProductsData } from '../../services/Api/productsApi'
import { getAllProducts } from '../../Redux/Store/ProductsDucks'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//components
import NavBar from '../../Components/Layout/Navbar';
import CardProduct from '../../Components/CardProduct';
import Footer from './../../Components/Layout/Footer'
import CarouselCategories from './../../Components/CarouselCategories'
// import BannerIntro from './../../Components/BannerIntro'
import Tab from './../../Components/Layout/Tab'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
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
    textAlign: 'center'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),

  },
}));

export default function ListProducts() {
  const dispatch = useDispatch()
  const classes = useStyles()
  let data = {}
  const food = useSelector((data) => data.productsStore.food)
  const drink = useSelector((data) => data.productsStore.drink)
  const recieveAllProducts = async () => {
    data = await getAllProductsData()
    dispatch(getAllProducts(data))
  }

  useEffect(() => {
    recieveAllProducts()
    // debugger
  }, []);

  useEffect(() => {
    //atualizar quando receber dado novo de categoria selecionada
  }, []);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Tab />
        <CarouselCategories data={food?.categories} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {food?.categories?.map((categories) => (
              categories?.products.map((prod) => (
                <>
                  <Grid item md={4} sm={6} xs={12}>
                    <CardProduct data={prod} />
                  </Grid>
                </>
              ))
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
