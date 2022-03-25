import * as Styled from "./styled";
import Post from "../../components/dumbs/Post";
import cat from "../../assets/cat.jpeg";
import catpost from "../../assets/catpost.jpeg";
import maineCoon from "../../assets/maineCoon.jpg";
import persa from "../../assets/persa.jpg";

function Feed() {
  return (
    <Styled.Container>
      <Post
        post={persa}
        description="Se alongando ao ar livre!"
        pastTime="12 dias atrás"
        profile={{ name: "gato.persa", picture: cat }}
      />
      <Post
        profile={{ name: "maine.coon", picture: catpost }}
        post={maineCoon}
        description="Dando uma volta para aquecer as patas."
        pastTime="15 dias atrás"
      />
    </Styled.Container>
  );
}

export default Feed;
