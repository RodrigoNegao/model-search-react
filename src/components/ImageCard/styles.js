import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  background-color: ${(props) => props.theme.colors.background};
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  margin-left: 10px;
`;

export { Card, Title };
