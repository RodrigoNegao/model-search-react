import styled from 'styled-components';

// const TextFieldCustom = styled.input`
//   width: 80vw;
//   font-size: 16px;
//   border-radius: 6px;
//   border: 1px solid black;
// `;

const Color = (props) => props.theme.colors.primary;

const LabelCustom = styled.div``;

const InputCustom = styled.input`
  width: 110%;
  &:not(${(props) => props.value}) + ${LabelCustom} {
    font-size: 14px;
    top: 0;
    color: ${Color};
  }
`;

const TextFieldCustom = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  position: relative;
  padding-top: 10px;
  ${InputCustom} {
    height: 12px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    /* min-width: 555px; */
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }
  ${InputCustom}:focus {
    border: 2px solid ${Color};
  }
  ${LabelCustom} {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
  }

  /*${InputCustom}:not(${(props) => (props.value ? props.color : 'white')}) + ${LabelCustom}*/
  ${InputCustom}:focus + ${LabelCustom} {
  font-size: 14px;
  top: 0;
  color: ${Color};
  }
`;

export { LabelCustom, TextFieldCustom, InputCustom };
