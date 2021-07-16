import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Item, ItemInfo, Title, Address, ItemPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const ItemCard = ({ item, onClick }) => (
  <Item onClick={onClick}>
    <ItemInfo>
      <Title>{item.name}</Title>
      <ReactStars count={5} isHalf value={item.rating} edit={false} activeColor="#e7711c" />
      <Address>{item.vicinity || item.formatted_address}</Address>
    </ItemInfo>
    <ItemPhoto
      src={item.photos ? item.photos[0].getUrl() : restaurante}
      alt="Feito do Restaurante"
    />
  </Item>
);

export default ItemCard;
