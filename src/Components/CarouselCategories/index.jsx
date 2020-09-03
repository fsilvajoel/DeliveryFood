import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 250, itemsToShow: 3 },
  { width: 550, itemsToShow: 5 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 10 }
];
const CarrrouselCategories = (props) => {
  const data = props.data
  console.log('recieve?', props.data)

  return (
    <>
      {data ?
        <Carousel breakPoints={breakPoints} itemsToScroll={2} itemsToShow={10}>
          {data?.map(category => {
            return (
              <Item
                key={category.slug}
                img={category.image}
                link={category.slug}
                title={category.name}
              />
            )
          })}
        </Carousel>
        :
        <></>
      }
      {/* <Item key="1234" img={data.img2} link={data.link} title={data.title1} />2*/}
      {/* <Item img={data.img3} link={data.link} title={data.title2} /> */}
    </>
  );
};
export default CarrrouselCategories;
