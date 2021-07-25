import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import {
  Wrapper,
  Carousel,
  Container,
  Search,
  Logo,
  CarouselTitle,
  ModalTitle,
  ModalContent,
} from './styles';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { ItemCard, Card, Modal, Map, Loader, Skeleton } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setItemId] = useState(null);
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

  function handleOpenModal(placeId) {
    setItemId(placeId);
    setModalOpened(true);
    //console.log('placeId: ', placeId);
    //console.log('itemSelected: ', itemSelected);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="logo do restaurante" />
          <TextField
            label="Pesquise"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          {items.length > 0 ? (
            <>
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
            </>
          ) : (
            <Loader />
          )}
        </Search>
        {items.map((item) => (
          <ItemCard item={item} onClick={() => handleOpenModal(item.place_id)} />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {itemSelected ? (
          <>
            <ModalTitle>{itemSelected?.name}</ModalTitle>
            <ModalContent>{itemSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{itemSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {itemSelected?.openning_hours?.open_now ? 'Aberto Agora o/' : 'Fechado neste momento'}
            </ModalContent>
          </>
        ) : (
          <>
            <Skeleton width="10px" height="25px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
            <Skeleton width="10px" height="10px" />
          </>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
