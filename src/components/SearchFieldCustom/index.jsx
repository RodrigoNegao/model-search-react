import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { IconButtonCustom, SearchField } from './styles';
import TextFieldCustom from '../TextFieldCustom';

export default (props) => {
  const { value, onKeyPress, onChange, children, onClick } = props;
  return (
    <SearchField>
      <TextFieldCustom value={value} onKeyPress={onKeyPress} onChange={onChange}>
        {children}
      </TextFieldCustom>
      <IconButtonCustom onClick={onClick}>
        <SearchIcon />
      </IconButtonCustom>
    </SearchField>
  );
};
