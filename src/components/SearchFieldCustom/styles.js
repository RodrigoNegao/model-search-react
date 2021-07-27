import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const IconButtonCustom = styled(IconButton)`
  & {
    margin-top: 8px !important;
  }
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const SearchField = styled.div`
  display: flex;
  flex-direction: row;
`;

export { IconButtonCustom, SearchField };
