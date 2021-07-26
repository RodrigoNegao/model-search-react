import styled from 'styled-components';
import Slider from 'react-slick';
import TextField from '@material/react-text-field';
import { withStyles } from '@material-ui/core/styles';

//https://material-ui.com/pt/customization/components/

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

const SearchField = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  margin-bottom: 15px;
  height: 50px;
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
  font-size: 24px;
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

// const TextFieldCustom = styled(TextField)`
//   width: 80vw;
// `;

const TextFieldCustom = styled(TextField)`
  width: 80vw;
`;

export {
  TextFieldCustom,
  SearchField,
  Wrapper,
  Carousel,
  Container,
  Search,
  Logo,
  CarouselTitle,
  ModalTitle,
  ModalContent,
};
