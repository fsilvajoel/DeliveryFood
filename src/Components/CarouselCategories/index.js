import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from './Item'
import niguri from './niguri.jpg'

const CarrrouselCategories = () =>(
    <Carousel itemsToScroll={2} itemsToShow={6}>
        <Item>1<img src={niguri} alt="teste"/></Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>
        <Item>9</Item>
        <Item>10</Item>
        <Item>11</Item>
        
    </Carousel>
);
export default CarrrouselCategories;
