import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Carousel,
  Container,
  Search,
  Logo,
  CarouselTitle,
  ModalTitle,
  ModalContent,
  ModalOpen,
} from './styles';
import logo from '../../assets/logo1.svg';
import { ItemCard, Card, Modal, Map, Loader, Skeleton, SearchFieldCustom } from '../../components';

const Home = () => {
  const [value, setInputValue] = useState('');
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

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(value);
      //console.log('value: ', value);
    }
  }

  function handleClick() {
    setQuery(value);
    //console.log('value: ', value);
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
          <SearchFieldCustom
            value={value}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onClick={handleClick}>
            Pesquisar
          </SearchFieldCustom>
          {items.length > 0 ? (
            <>
              <CarouselTitle>Na sua Area</CarouselTitle>
              <Carousel {...settings}>
                {items.map((item) => (
                  <Card
                    key={item.place_id}
                    item={item}
                    onClick={() => handleOpenModal(item.place_id)}
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
            <ModalOpen>
              {itemSelected?.opening_hours?.isOpen ? 'Aberto Agora o/' : 'Fechado neste momento'}
            </ModalOpen>
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
