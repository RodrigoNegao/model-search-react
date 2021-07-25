import styled from 'styled-components';

const Item = styled.div`
display: flex;
justify-content: space-between;
cursor: pointer;
margin-top 5px;
padding: 16px;
background-color: #ffffff;
border-left: 5px solid transparent;
:hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
}
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 10px;
`;

const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const ItemPhoto = styled.img`
  display: ${(props) => (props.imageLoaded ? 'block' : 'none')};
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`;

export { Item, ItemInfo, Title, Address, ItemPhoto };
