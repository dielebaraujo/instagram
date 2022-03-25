import Input from "../../dumbs/Input";

function SearchInput(props) {
  return (
    <Input
      onChage={props.onChage}
      value={props.value}
      placeholder="Pesquisar"
    />
  );
}

export default SearchInput;
