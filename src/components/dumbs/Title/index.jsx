import * as Styled from "./styled";

function Title(props) {
  return (
    <Styled.Title className={props.className}>{props.children}</Styled.Title>
  );
}

export default Title;
