import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardProduct from '../../Components/CardProduct';
import BannerIntro from './BannerIntro';
import Grid from '@material-ui/core/Grid';
import Footer from './../../Components/Layout/Footer';
//components
import NavBar from '../../Components/Layout/Navbar';
import TabCategories from '../../Components/Layout/Tab/index';
import { getAllProducts } from '../../shared/Redux/Store/Products/ProductsDucks';
import { setDistricts, setCities } from '../../shared/Redux/Store/Adress/Adress';
//api
import { getAdressData } from '../../shared/services/Api/adress';
import { getAllProductsData } from '../../shared/services/Api/productsApi';
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
    textAlign: 'center',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function ListProducts() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showCategory, setshowCategory] = useState();

  const food = useSelector((data) => data.productsStore.food);
  const drink = useSelector((data) => data.productsStore.drink);

  let showProducts = useSelector((data) => data.productsStore.current_category);

  const recieveAllProducts = async () => {
    const result = await getAllProductsData();
    dispatch(getAllProducts(result));
  };

  const recieveAllAdressData = async () => {
    const districts = await getAdressData('districts');
    const cities = await getAdressData('cities');
    console.log('DISTRITOS', districts);
    console.log('cidades', cities);
    dispatch(setCities(cities));
    dispatch(setDistricts(districts));
  };

  function handleShowProduct() {
    setshowCategory(food?.categories?.filter((category) => category.slug === showProducts));
  }

  useEffect(() => {
    //atualizar quando receber dado novo de categoria selecionada
    recieveAllProducts();
    handleShowProduct();
    recieveAllAdressData();
  }, [useSelector((data) => data.productsStore.current_category)]);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <TabCategories food={food?.categories} drink={drink?.categories} />
        <Container className={classes.cardGrid} maxWidth="md">
          {showProducts.length !== undefined ? (
            <Grid container spacing={4}>
              {showCategory?.map((category) =>
                category?.products.map((prod, index) => (
                  <>
                    <Grid key={index} item md={4} sm={6} xs={12}>
                      <CardProduct key={index} data={prod} />
                    </Grid>
                  </>
                ))
              )}
            </Grid>
          ) : (
            <BannerIntro />
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
