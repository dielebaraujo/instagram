import * as Styled from "./styled";

function Button(props) {
  return (
    <Styled.Button onClick={props.onClick}>{props.children}</Styled.Button>
  );
}

export default Button;
