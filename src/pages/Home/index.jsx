import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Link, Wrapper, Carousel, Container, Search, Logo, CarouselTitle } from './styles';
import logo from '../../assets/logo1.svg';
import { ItemCard, Card, Map, Loader, SearchFieldCustom, ModalCustom } from '../../components';

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
    }
  }

  function handleClick() {
    setQuery(value);
  }

  function handleOpenModal(placeId) {
    setItemId(placeId);
    console.log('Home>>>', placeId);
    setModalOpened(true);
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Link href="https://github.com/RodrigoNegao/model-search-react" target="_blank">
            <Logo src={logo} alt="logo do restaurante" />
          </Link>
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
          <ItemCard
            key={'itemcard' + item.place_id}
            item={item}
            onClick={() => handleOpenModal(item.place_id)}
          />
        ))}
      </Container>
      <Map query={query} placeId={placeId} />
      <ModalCustom open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
