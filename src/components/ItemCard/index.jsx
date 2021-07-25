import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Item, ItemInfo, Title, Address, ItemPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const ItemCard = ({ item, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Item onClick={onClick}>
      <ItemInfo>
        <Title>{item.name}</Title>
        <ReactStars count={5} isHalf value={item.rating} edit={false} activeColor="#e7711c" />
        <Address>{item.vicinity || item.formatted_address}</Address>
      </ItemInfo>
      <ItemPhoto
        imageLoaded={imageLoaded}
        src={item.photos ? item.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoaded(true)}
        alt="Foto do Item"
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Item>
  );
};

export default ItemCard;
