import styled from "styled-components";
interface Props {
  $color?: string;
}
export const CloseButton = styled.button<{ on?: string }>`
  display: block;
  text-transform: uppercase;
  float: right;
  border: none;
  color: #3d484a;
  font-weight: 800;
  position: relative;
  padding-right: 35px;
  &:after {
    content: "";
    width: 20px;
    height: 18px;
    background-image: url(https://www.zr.ru/f/media/sprites.png);
    background-repeat: no-repeat;
    background-position: 0 -129px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -10px;
  }
`;

export const MainNav = styled.ul`
  text-transform: uppercase;
  margin: 40px 0 -10px 0;
  border-bottom: 1px solid #3d484a;
`;
