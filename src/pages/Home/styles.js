import styled from 'styled-components';

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
// scroll
export { Wrapper, Container, Search, Logo, Map };
