import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

type CardType = {
  name:string,
  image:string,
  description:string
}

const Carousel1: React.FC<CardType>= ({image}:CardType) => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img
                alt="example"
                src={image}
            /></h3>
    </div>
   
  </Carousel>
);

export default Carousel1;
