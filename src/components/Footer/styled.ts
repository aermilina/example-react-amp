import styled from "styled-components";
import ZrLogo from "../assets/footerLogo.svg";
import AgeIcon from "../assets/ageIcon.svg";

interface Props {
  $ico?: string;
}

export const Footer = styled.footer`
  color: #cccccc;
  background-color: #333333;
  padding-bottom: 16px;
  clear: both;
  font-family: "Fira Sans Extra Condensed", sans-serif;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  flex-shrink: 0;
  padding: 24px 12px 0 12px;
`;

export const LogoBlock = styled.div`
  padding-bottom: 10px;
`;

export const LogoLink = styled.a`
  padding: 1rem 1rem 0;
  display: block;
  width: 151px;
  height: 30px;
  background-image: url(${ZrLogo});
  background-repeat: no-repeat;
  background-size: 136px auto;
`;

export const SocialLinks = styled.div`
  text-align: center;
`;

export const ShareLink = styled.a<Props>`
  display: inline-block;
  width: 33px;
  height: 32px;
  margin-right: 7px;
  text-indent: 200%;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: "opacity .2s";
  -moz-transition: "opacity .2s";
  transition: "opacity .2s";
  opacity: 0.7;
  border-bottom: none;
  background-image: url(${(props) => props["$ico"]});
  background-repeat: no-repeat;
  margin-bottom: 6px;
  background-size: contain;
`;

export const Copyright = styled.div`
  display: inline-block;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.0625rem;
`;

export const AgeRestriction = styled.div`
  display: inline-block;
  background-image: url(${AgeIcon});
  background-repeat: no-repeat;
  background-size: contain;
  width: 2.5rem;
  height: 2rem;
  float: right;
`;
