import * as Styled from "./styled";
import Post from "../../components/dumbs/Post";
import * as Image from "../../services/Image";
import { useEffect, useState } from "react";

function Feed() {
  const array = useState();
  // array[0]
  // array[1]()
  const [images, setImages] = useState();
  // image
  // setImages()
  async function fetchImages() {
    const response = await Image.get();
    setImages(response.data);
  }
  useEffect(() => {
    fetchImages();
  }, []);
  console.log(images, "image");
  return (
    <Styled.Container>
      {images?.map?.((image, index) => (
        <Post
          key={index}
          post={image.url}
          description="Se alongando ao ar livre!"
          pastTime="12 dias atrás"
          profile={{ name: "gato.persa", picture: image.url }}
        />
      ))}
    </Styled.Container>
  );
}

export default Feed;
