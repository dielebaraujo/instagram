import * as Styled from "./styled";

function SearchInput(props) {
  return (
    <Styled.SearchInput
      onChage={props.onChage}
      value={props.value}
      placeholder="Pesquisar"
    />
  );
}

export default SearchInput;
