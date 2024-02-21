import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  background-color: #fff;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: #000;
  width: 100%;
  font-family: "PT Sans", sans-serif;

  a {
    text-decoration: none;
    transition: color 150ms ease;
  }

  amp-sidebar {
    padding: 10px;
    font-family: "Fira Sans Extra Condensed", sans-serif;
  }

  amp-sidebar ul {
    list-style: none;
    padding: 0;
  }
  amp-sidebar ul li {
    padding: 10px;
  }
  amp-sidebar ul li a {
    color: #3d484a;
    font-size: 17px;
    font-weight: 700;
  }
  h1 {
    font-size: 28px;
    line-height: 34px;
    color: #000;
    font-weight: 700;
  }
  h2 {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    margin: 0 0 1rem;
  }
  h3 {
    color: #000000;
    font-size: 21px;
    font-weight: 700;
    line-height: 24px;
    margin: 0 0 1rem;
  }
  h4 {
    color: #5e5e5e;
    font-size: 19.2px;
    font-weight: 700;
    line-height: 19.2px;
    margin: 0 0 1rem;
  }
`;
