import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Item, ItemInfo, Title, Address, ItemPhoto } from './styles';
import restaurante from '../../assets/restaurante-fake.png';

const ItemCard = () => (
  <Item>
    <ItemInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
      <Address>Rua Dr. Nacimento 570</Address>
    </ItemInfo>
    <ItemPhoto src={restaurante} alt="Feito do Restaurante" />
  </Item>
);

export default ItemCard;
