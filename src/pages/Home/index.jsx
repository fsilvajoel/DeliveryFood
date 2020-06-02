import React, {Component,Fragment, useState,useEffect } from "react";
//api
import getProducts from "../../Api/productsApi"
//material UI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//components
import PrimarySearchAppBar from "../../Components/Layout/Toolbar";
import CardProduct from "../../Components/CardProduct";
import Footer from "./../../Components/Layout/Footer"
import CarouselCategories from "./../../Components/CarouselCategories"
import BannerIntro from "./../../Components/BannerIntro"

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
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	cardMedia: {
		paddingTop: "56.25%", // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function ListProducts(){
	const [products, setProducts] = useState([]);

	
	// useEffect(() =>{
		// const data = product.get();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async() =>{
		// const data = getProducts();
		const response = await 	fetch('http://localhost:3000/products')
		const data = await response.json();
		console.log("useeffect", data)
	
		setProducts(data);
	}, []);//só executa o effect quando mudar a variavel. caso vazio, executa uma unica
		const classes = useStyles();
		return (
			<Fragment>
				<CssBaseline />
				<PrimarySearchAppBar />
				<main>
					<CarouselCategories />
					{/* Hero unit */}
					<BannerIntro/>
					<Container className={classes.cardGrid} maxWidth="md">
						{/* End hero unit */}
						<Grid container spacing={4}>								
							{products.map((prod) => (
								<Grid item key={prod.id} xs={12} sm={6} md={4}>
									<CardProduct
										image={prod.img}
										title={prod.name}
										description={prod.description}
										Name={classes.card}
										Media={classes.cardMedia}
										Content={classes.cardContent}
									/>
								</Grid>
							))}
						</Grid>
					</Container>
				</main>
				{/* Footer */}
				<Footer />
				{/* End footer */}
			</Fragment>
		);
	}
	