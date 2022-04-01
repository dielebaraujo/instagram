import styled from "styled-components";
import DefaultLink from "../../components/dumbs/Link";
import DefaultText from "../../components/dumbs/Text";
import DefaultTitle from "../../components/dumbs/Title";
import DefaultFooter from "../../components/dumbs/Footer";

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleError = styled(DefaultTitle)`
  font-size: 24px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

export const TextError = styled(DefaultText)`
  color: #000000;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0; ;
`;

export const FooterError = styled(DefaultFooter)`
  display: block;
  height: 77px;
  margin-left: 20%;
`;

export const LinkText = styled(DefaultLink)`
  color: #003569;
  text-decoration: none;
  font-size: 16px;
`;

export const LinkFooter = styled(LinkText)`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  height: 77px;
  padding: 600px 20px;
  display: inline-block;
`;
