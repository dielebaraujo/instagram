import * as Styled from "./styled";

function Footer(props) {
  return (
    <Styled.Footer className={props.className}>{props.children}</Styled.Footer>
  );
}

export default Footer;
