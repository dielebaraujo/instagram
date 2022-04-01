import * as Styled from "./styled";

function Text(props) {
  return (
    <Styled.Text className={props.className}>{props.children}</Styled.Text>
  );
}

export default Text;
