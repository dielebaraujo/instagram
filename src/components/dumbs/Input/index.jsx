import * as Styled from "./styled";

function Input(props) {
  return (
    <Styled.Input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
}

export default Input;
