import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './../../Components/Layout/Footer'
import PrimarySearchAppBar from '../../Components/Layout/Toolbar';
// import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  }
});

function Account() {
  const classes = useStyles();
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar />
      {/* <main> */}
        <Container maxWidth="sm" style={{ height: '70vh', paddingTop: '40px' }}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h6">
                Editar Dados
            </Typography>
              <Grid container spacing={3}>
                <Grid item sm={12} xs={12}>
                  <TextField
                    autoComplete="fname"
                    fullWidth
                    id="Name"
                    label="Nome "
                    name="name"
                    required
                  />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <TextField
                    autoComplete="lname"
                    fullWidth
                    id="lastName"
                    label="Sobrenome"
                    name="lastName"
                    required
                  />
                </Grid>
                <Grid item sm={12} xs={12}>
                  <TextField
                    autoComplete="mail"
                    fullWidth
                    id="mail"
                    label="E-mail"
                    name="mail"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="Telefone"
                    fullWidth
                    id="phone"
                    label="Telefone"
                    name="phone"
                    required
                  />
                </Grid>
                <Button>BOTAO</Button>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      {/* </main> */}
      <Footer />
    </>
  )
}

export default Account;