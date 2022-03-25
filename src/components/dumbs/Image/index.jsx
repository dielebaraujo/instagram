import * as Styled from "./styled";

function Image(props) {
  return <Styled.Image src={props.src} className={props.className} />;
}

export default Image;
