import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Wrapper, Carousel, Container, Search, Logo, CarouselTitle } from './styles';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { ItemCard, Card, Modal, Map } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [itemId, setItemId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { items, itemSelected } = useSelector((state) => state.items);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(itemId) {
    setItemId(itemId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label="Pesquise"
            outlined
            //onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>Na sua Area</CarouselTitle>
          <Carousel {...settings}>
            {items.map((item) => (
              <Card
                key={item.place_id}
                photo={item.photos ? item.photos[0].getUrl() : restaurante}
                title={item.name}
              />
            ))}
          </Carousel>
        </Search>
        {items.map((item) => (
          <ItemCard item={item} onClick={() => handleOpenModal(item.place_id)} />
        ))}
      </Container>
      <Map query={query} itemId={itemId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <p>{itemSelected?.name}</p>
        <p>{itemSelected?.formatted_phone_number}</p>
        <p>{itemSelected?.formatted_address}</p>
      </Modal>
    </Wrapper>
  );
};

export default Home;
