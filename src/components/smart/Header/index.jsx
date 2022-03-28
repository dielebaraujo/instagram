import * as Styled from "./styled";
import Button from "../../dumbs/Button";
import logoSrc from "../../../assets/logo.png";
import SearchInput from "../SearchInput";

function Header(props) {
  return (
    <Styled.Header>
      <Styled.Logo src={logoSrc} />
      <SearchInput />
      <div>
        <Button>Entrar</Button>
        <Button>Cadastrar</Button>
      </div>
    </Styled.Header>
  );
}

export default Header;
