import styled from 'styled-components';

const InputStyle = styled.input`
  background-color: #f8f8f6;
  border: none;
  height: 38px;
  min-width: 243px;
  border-radius: 6px;
  text-indent: 15px;
  font-size: 13px;
  font-family: var(--heading-font, 'Quicksand');
  transition: all 0.3s ease-out;
  border-color: purple;
  caret-color: purple;
  outline: none;
  border: solid 1px transparent;

  &::placeholder {
    color: #a0a0a0;
  }

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(112, 93, 245, 0.16);
  }

  &:focus {
      border: solid 1px purple;
  }
`

export default InputStyle