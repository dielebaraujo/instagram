import * as Styled from "./styled";
import logoSrc from "../../../assets/logo.png";
import SearchInput from "../SearchInput";

function Header(props) {
  return (
    <Styled.Header>
      <Styled.Logo src={logoSrc} />
      <SearchInput />
      <div>
        <Styled.ButtonPrimary>Entrar</Styled.ButtonPrimary>
        <Styled.ButtonSecundary>Cadastrar</Styled.ButtonSecundary>
      </div>
    </Styled.Header>
  );
}

export default Header;
