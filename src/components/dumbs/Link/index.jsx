import * as Styled from "./styled";

function Link(props) {
  return (
    <Styled.Link className={props.className} href={props.href}>
      {props.children}
    </Styled.Link>
  );
}

export default Link;
