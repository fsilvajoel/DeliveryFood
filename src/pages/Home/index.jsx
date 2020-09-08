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
import CarouselCategories from '../../Components/CarouselCategories/CarouselCategories'
import BannerIntro from './BannerIntro'
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
  const [showCategory, setshowCategory] = useState()

  const food = useSelector((data) => data.productsStore.food)
  const drink = useSelector((data) => data.productsStore.drink)

  let data = {}
  let showProducts = useSelector((data) => data.productsStore.current_category)


  const recieveAllProducts = async () => {
    data = await getAllProductsData()
    dispatch(getAllProducts(data))
  }

  function handleShowProduct() {
    setshowCategory(food?.categories?.filter(category => category.slug == showProducts))
  }

  useEffect(() => {
    //atualizar quando receber dado novo de categoria selecionada
    recieveAllProducts()
    handleShowProduct()
  }, [useSelector((data) => data.productsStore.current_category)]);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Tab />
        <CarouselCategories data={food?.categories} />
        <Container className={classes.cardGrid} maxWidth="md">
          {showProducts.length != undefined ?
            <Grid container spacing={4}>
              {showCategory?.map(category =>
                category?.products.map((prod, index) =>
                  <>
                    <Grid key={index} item md={4} sm={6} xs={12}>
                      <CardProduct data={prod} />
                    </Grid>
                  </>
                ))}
            </Grid>
            :
            <BannerIntro />
          }
        </Container>
      </main>
      <Footer />
    </>
  );
}
