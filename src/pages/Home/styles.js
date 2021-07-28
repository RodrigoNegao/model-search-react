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
  margin-top: 5px;
  margin-bottom: 15px;
  height: 50px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
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
  .slick-slide {
    margin-right: 20px;
  }
`;

const ModalTitle = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  line-height: 29px;
  font-size: 28px;
  font-weight: bold;
`;

const ModalContent = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
  line-height: 19px;
  font-size: 19px;
`;

const ModalOpen = styled.p`
  margin-bottom: 10px;
  letter-spacing: 0.11px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-weight: bold;
  line-height: 19px;
  font-size: 22px;
`;

export {
  Link,
  Wrapper,
  Carousel,
  Container,
  Search,
  Logo,
  CarouselTitle,
  ModalTitle,
  ModalContent,
  ModalOpen,
};
