import React from 'react'
// import React, {Component,Fragment, useState,useEffect } from "react";
//api
// import getProducts from "../../Api/productsApi"
//material UI
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
}));

const BannerIntro =()=>{
    const classes = useStyles();
    return(
    <div className={classes.heroContent}>
        <Container maxWidth="sm">
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
            >
                Home
            </Typography>
            <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
            >
            Aqui será criada a pagina principal do sistema de delivery.
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained" color="primary">
                            Main call to action
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary action
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
    )
}
export default BannerIntro;