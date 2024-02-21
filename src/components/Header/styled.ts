import styled from "styled-components";
import ZrLogo from "../assets/zr-logo.svg";
import BurgerIco from "../assets/sitemapIcon.svg";

interface Props {
  $width?: number;
  $color?: string;
  $marginBottom?: number;
  $birthIcon?: string;
}

export const ArrowNext = styled.div`
  padding: 0 0.5rem 0.5rem;
  margin: 0 0.25rem;
  color: #3d484a;
  font-size: 18px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  &:after {
    content: ">";
  }
  &[disabled]:after {
    content: "#";
  }
`;
export const ArrowPrev = styled.div`
  padding: 0 0.5rem 0.5rem;
  margin: 0 0.25rem;
  color: #3d484a;
  font-size: 18px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  &:after {
    content: "<";
  }
  &[disabled]:after {
    content: "#";
  }
`;

export const HeaderTags = styled.div`
  amp-base-carousel {
    height: 28px;
    background: #e0e0e0;
  }
  amp-base-carousel a {
    padding: 0 2rem 0.5rem 2rem;
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    color: #3d484a;
    font-family: "Fira Sans Extra Condensed", sans-serif;
  }

  amp-base-carousel a:empty {
    display: none;
  }
`;

export const HamburgerSitemap = styled.div`
  position: relative;
`;
export const HamburgerButton = styled.button<{ on?: string }>`
  display: block;
  padding: 0;
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  box-sizing: border-box;
  background: transparent;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-image: url(${BurgerIco});
    background-repeat: no-repeat;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  a {
    color: #2c3436;
  }
  a[role="button"] {
    position: relative;
    padding-right: 15px;
  }
  a[role="button"]:visited {
    color: #2c3436;
  }
  &[open] {
    background: rgba(0, 0, 0, 0.5);
  }
  a[role="button"]::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 10px;
    margin-top: -1px;
    margin-left: 5px;
    font-size: 1em;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 7px solid #3d484a;
  }
`;

export const LogoPic = styled.a`
  width: 152px;
  height: 2rem;
  background-image: url(${ZrLogo});
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
`;

export const Logo = styled.div`
  height: 36px;
  margin-right: 0px;
`;

export const SpecialMarkContainer = styled.div<Props>`
  position: absolute;
  left: 0;
  bottom: 0;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  width: ${(props) => (props["$width"] ? props["$width"] : 167)}px;
  border-bottom: 2px solid
    ${(props) => (props["$color"] ? props["$color"] : "transparent")};
  -webkit-transform: skew(-8deg);
  -moz-transform: skew(-8deg);
  -o-transform: skew(-8deg);
  z-index: 5;
  display: inline-block;
`;

export const SpecialMark = styled.div<Props>`
  background-color: ${(props) =>
    props["$color"] ? props["$color"] : "transparent"};
  color: #fff;
  text-transform: uppercase;
  float: right;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  padding: 2px 7px 0px;
  box-shadow: 0px -5px 10px 3px rgba(255, 255, 255, 0.4);

  span {
    display: inline-block;
    -webkit-transform: skew(8deg);
    -moz-transform: skew(8deg);
    -o-transform: skew(8deg);
  }
`;

export const Sticker = styled.a<Props>`
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  width: 110px;
  margin-right: 0px;
  margin-left: 0px;
  color: ${(props) => (props["$color"] ? props["$color"] : "transparent")};
`;

export const BrthCoin = styled.a<Props>`
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: ${(props) =>
    props["$marginBottom"] ? props["$marginBottom"] : 0}px;
  background: url(${(props) =>
      props["$birthIcon"] ? props["$birthIcon"] : ""})
    0 0 no-repeat;
  height: 36px;
  width: 46px;
  margin-left: 6px;
  background-size: contain;
`;
export const Header = styled.header<{ "next-page-hide"?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #fff;
  background-position: bottom;
  padding: 4px 12px;
  position: relative;
`;
