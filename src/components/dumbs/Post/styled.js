import styled from "styled-components";
import DefaultImage from "../Image";
import DefaultRow from "../Row";
import { ReactComponent as DotsSvg } from "../../../assets/dots.svg";
import { ReactComponent as HeartSvg } from "../../../assets/heart.svg";
import { ReactComponent as BalloonSvg } from "../../../assets/balloon.svg";
import { ReactComponent as SendSvg } from "../../../assets/send.svg";
import { ReactComponent as SaveSvg } from "../../../assets/save.svg";

export const Container = styled.article`
  border: 1px solid #dbdbdb;
  width: 614px;
  margin-bottom: 24px;
`;

export const SpacedRow = styled(DefaultRow)`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const FirstRow = styled(SpacedRow)`
  padding: 14px 0px 14px 16px;
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const UserImage = styled(DefaultImage)`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-right: 14px;
`;

export const Name = styled.span`
  white-space: nowrap;
  font-weight: bold;
`;

export const Footer = styled.footer`
  padding: 0 16px 16px 16px;
`;

export const PostImage = styled(DefaultImage)`
  height: auto;
  width: 100%;
`;

export const Dots = styled(DotsSvg)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Heart = styled(HeartSvg)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Balloon = styled(BalloonSvg)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Send = styled(SendSvg)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Save = styled(SaveSvg)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-left: 4px;
`;

export const PastTime = styled.time`
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
  margin-top: 8px;
`;
