import React from 'react';
import { LabelCustom, TextFieldCustom, InputCustom } from './styles';

export default (props) => {
  const { value, onKeyPress, onChange, children } = props;
  return (
    <>
      <TextFieldCustom>
        <InputCustom type="text" value={value} onKeyPress={onKeyPress} onChange={onChange} />
        <LabelCustom>{children}</LabelCustom>
      </TextFieldCustom>
    </>
  );
};
