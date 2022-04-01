import styled from "styled-components";
import Image from "../../dumbs/Image";
import Button from "../../dumbs/Button";

export const Header = styled.header`
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  padding: 12px 112.5px;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Logo = styled(Image)`
  width: 113px;
  height: 29px;
`;

export const ButtonPrimary = styled(Button)`
  background-color: #0095f6;
  color: #ffffff;
`;

export const ButtonSecundary = styled(Button)`
  background-color: transparent;
  color: #0095f6;
`;
