import * as Styled from "./styled"

function Text(props) {
    return <Styled.Text>
        {props.children}
        </Styled.Text>
}

export default Text