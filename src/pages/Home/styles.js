import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

const Logo = styled.img`
  margin-bottom: 15px;
  height: 50px;
`;

const Map = styled.div`
  background-color: red;
  width: 100vw;
`;

const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;

const Carousel = styled(Slider)`
  slick-slider {
    margin-right: 16px;
  }
`;

// scroll
export { Wrapper, Carousel, Container, Search, Logo, Map, CarouselTitle };
