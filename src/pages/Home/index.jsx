import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import BannerIntro from './BannerIntro'
import CardProduct from '../../Components/CardProduct';
// import CarouselCategories from '../../Components/CarouselCategories/CarouselCategories'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './../../Components/Layout/Footer'
import Grid from '@material-ui/core/Grid';
//components
import NavBar from '../../Components/Layout/Navbar';
// import Tab from '../../Components/Layout/Tab/index2'
import TabCategories from '../../Components/Layout/Tab/index'
import { getAllProducts } from '../../Redux/Store/Products/ProductsDucks'
//api
import { getAllProductsData } from '../../services/Api/productsApi'
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
        <TabCategories food={food?.categories} drink={drink?.categories} />
        <Container className={classes.cardGrid} maxWidth="md">
          {showProducts.length != undefined ?
            <Grid container spacing={4}>
              {showCategory?.map(category =>
                category?.products.map((prod, index) =>
                  <>
                    <Grid key={index} item md={4} sm={6} xs={12}>
                      <CardProduct key={index} data={prod} />
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
