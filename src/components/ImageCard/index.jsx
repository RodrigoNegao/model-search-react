import React, { useState, useEffect } from 'react';
import { Card, Title } from './styles';

import Skeleton from '../Skeleton';
import pub from '../../assets/pub.jpg';

const ImageCard = ({ item, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const image = item.photos ? item.photos[0].getUrl() : pub;

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
        <Card onClick={onClick} photo={image}>
          <Title>{item.name}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
