import * as Styled from "./styled";

function SearchInput(props) {
  return (
    <Styled.SearchInput
      onChange={props.onChange}
      value={props.value}
      placeholder="Pesquisar"
    />
  );
}

export default SearchInput;
