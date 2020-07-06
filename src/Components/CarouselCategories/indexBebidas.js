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
  const CarrrouselCategoriesBebidas = () =>{
    const data = {
        img: "https://emporiodacerveja.vtexassets.com/arquivos/ids/169192/hoegaarden-330-ml-49.jpg?v=636505054366670000",
        img2: "https://static.carrefour.com.br/medias/sys_master/images/images/hd7/hd6/h00/h00/12175683682334.jpg",
        img3: "https://images.tcdn.com.br/img/img_prod/741351/kit_espumantes_casa_perini_709_1_20200406114628.jpg",
        img4: "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R6f00001FnI8gEAF/5dc9d7a9e4b001090346a57c.jpg&w=710&h=462",
        img5: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRr6JpqZkMvUFxWgp72EsmctXnhNqgEQZPyDw&usqp=CAU",
       
        link: "/link",
        title: "Cervejas",
        title2: "Refrigerantes",
        title3: "Espumantes",
        title4: "Vinho Tinto",
        title5: "Drinks",

        
      }
    return(
    <Carousel breakPoints={breakPoints} itemsToScroll={2} itemsToShow={10}>
        <Item img={data.img} title={data.title} link={data.link}></Item>        
        <Item img={data.img2} title={data.title2} link={data.link}></Item>        
        <Item img={data.img3} title={data.title3} link={data.link}></Item>        
        <Item img={data.img4} title={data.title4} link={data.link}></Item>        
        <Item img={data.img5} title={data.title5} link={data.link}></Item>        
    </Carousel>
    )};
export default CarrrouselCategoriesBebidas;
