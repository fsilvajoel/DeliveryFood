import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import niguri from './niguri.jpg'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 250, itemsToShow: 3 },
    { width: 550, itemsToShow: 5 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 10 }
  ];
  const CarrrouselCategories = () =>{
    const data = {
        img: "https://www.guiadasemana.com.br/contentFiles/image/2018/10/FEA/galeria/38336_w840h525_1540928319rodizio-de-comida-japonesa-barato-em-sao-paulo.jpg",
        img2: "https://bartzmoveis.com.br/wp-content/uploads/hashi-segurando-sushi-comida-japonesa.jpg",
        img3: "https://media-cdn.tripadvisor.com/media/photo-s/15/05/03/32/sashimi-e-sushi-variados.jpg",
        img4: "https://i0.wp.com/fazersushi.com/wp-content/uploads/2016/05/topshot-e1462720257269.jpg?fit=400%2C314&ssl=1",
        img5: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr6JpqZkMvUFxWgp72EsmctXnhNqgEQZPyDw&usqp=CAU",
        img6: "https://anamaria.uol.com.br/orinoco/media/images/large/2019/09/12/comida-japonesa-1178604.jpg",
        img7: "https://img.elo7.com.br/product/zoom/21563D8/painel-adesivo-decorativo-comida-japonesa-sushi-linda-imagem-restaurante-japones.jpg",
        img8: "https://bartzmoveis.com.br/wp-content/uploads/hashi-segurando-sushi-comida-japonesa.jpg",
        img9: "https://bartzmoveis.com.br/wp-content/uploads/hashi-segurando-sushi-comida-japonesa.jpg",
        img10: "https://bartzmoveis.com.br/wp-content/uploads/hashi-segurando-sushi-comida-japonesa.jpg",
        link: "/link",
        title: "Temakis",
        title1: "Uramaquis",
        title2: "Ura Premium",
        title3: "Futomakis",
        title4: "Gunkans",
        title5: "Sashimis",
        title6: "hots",
        
      }
    return(
    <Carousel breakPoints={breakPoints} itemsToScroll={2} itemsToShow={10}>
        <Item img={data.img} title={data.title} link={data.link}></Item>        
        <Item img={data.img2} title={data.title1} link={data.link}></Item>        
        <Item img={data.img3} title={data.title2} link={data.link}></Item>        
        <Item img={data.img4} title={data.title3} link={data.link}></Item>        
        <Item img={data.img5} title={data.title4} link={data.link}></Item>        
        <Item img={data.img6} title={data.title5} link={data.link}></Item>        
        <Item img={data.img7} title={data.title6} link={data.link}></Item>        
        <Item img={data.img8} title={data.title7} link={data.link}></Item>        
        <Item img={data.img9} title={data.title8} link={data.link}></Item>        
        <Item img={data.img} title={data.title9} link={data.link}></Item>        
        <Item img={data.img} title={data.title} link={data.link}></Item>        
        <Item img={data.img} title={data.title} link={data.link}></Item>            
    </Carousel>
    )};
export default CarrrouselCategories;
