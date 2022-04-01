import * as Styled from "./styled";

function Button(props) {
  return (
    <Styled.Button className={props.className} onClick={props.onClick}>
      {props.children}
    </Styled.Button>
  );
}

export default Button;
