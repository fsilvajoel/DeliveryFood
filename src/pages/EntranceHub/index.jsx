import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import PrimarySearchAppBar from "../../Components/Layout/Toolbar";
import CardProduct from "../../Components/CardProduct";
import Footer from "./../../Components/Layout/Footer"

import banner from './images/banner.jfif'
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: `url(${banner})`,
    backgroundPosition : "center",
    backgroundRepeat: "no-repeat",
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
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];
const img = "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000ziqnWEAQ/5b646575e4b00eb04bfa85ea.jpg&w=710&h=462"
export default function Album() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sushibar Morita
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Esta com fome? Encontre sua comida favorita!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button link="/home" variant="contained" color="">
                    Explorar Produtos
                  </Button>
                  <p>Dúvidas Frequentes</p>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Os mais pedidos:
            </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    {/* <CardProduct image ="https://source.unsplash.com/random"/> */}
                    {/* <CardProduct image =""/> */}
                    <CardProduct
										image={img}
									/>
                </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer/>
      {/* End footer */}
    </>
  );
}
