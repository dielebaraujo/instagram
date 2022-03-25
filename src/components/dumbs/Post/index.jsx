import * as Styled from "./styled";
import Row from "../Row";

function Post(props) {
  return (
    <>
      <Styled.Container>
        <Styled.FirstRow>
          <Styled.Profile>
            <Styled.UserImage src={props.profile.picture} />
            <Styled.Name>{props.profile.name}</Styled.Name>
          </Styled.Profile>
          <Styled.Dots />
        </Styled.FirstRow>
        <Styled.PostImage src={props.post} />
        <Styled.SpacedRow>
          <div>
            <Styled.Heart />
            <Styled.Balloon />
            <Styled.Send />
          </div>
          <Styled.Save />
        </Styled.SpacedRow>
        <Styled.Footer>
          <Row>
            <Styled.Name>{props.profile.name}</Styled.Name>
            <Styled.Description>{props.description}</Styled.Description>
          </Row>
          <Styled.PastTime>{props.pastTime}</Styled.PastTime>
        </Styled.Footer>
      </Styled.Container>
    </>
  );
}

export default Post;
