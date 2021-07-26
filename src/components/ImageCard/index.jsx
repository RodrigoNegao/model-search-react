import React, { useState, useEffect } from 'react';
import { Card, Title } from './styles';

import Skeleton from '../Skeleton';
import restaurante from '../../assets/restaurante-fake.png';

const ImageCard = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = item.photos ? item.photos[0].getUrl() : restaurante;

  //TODO fix  one carosel
  useEffect(() => {
    // Cria uma tag <img>
    const imageLoader = new Image();
    imageLoader.src = image;
    imageLoader.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={image}>
          <Title>{item.name}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
