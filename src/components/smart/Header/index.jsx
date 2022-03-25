import * as Styled from "./styled";
import Button from "../../dumbs/Button";
import Image from "../../dumbs/Image";
import logoSrc from "../../../assets/logo.png";
import SearchInput from "../SearchInput";

function Header(props) {
  return (
    <Styled.Header>
      <Image src={logoSrc} />
      <SearchInput />
      <div>
        <Button>Entrar</Button>
        <Button>Cadastrar</Button>
      </div>
    </Styled.Header>
  );
}

export default Header;
