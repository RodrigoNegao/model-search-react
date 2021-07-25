import React, { useState, useEffect } from 'react';
import { Card, Title } from './styles';

import Skeleton from '../Skeleton';

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Cria uma tag <img>
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width="90px" height="90px" />
      )}
    </>
  );
};

export default ImageCard;
