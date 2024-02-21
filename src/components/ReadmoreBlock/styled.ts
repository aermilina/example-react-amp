import styled from "styled-components";

export const ReadmoreContainer = styled.div`
  font-weight: 700;
  font-style: normal;
`;

export const ReadmoreTitle = styled.div`
  color: #970000;
  font-size: 28px;
  line-height: 34px;
  font-weight: 400;
  text-align: center;
  margin: 2rem auto 1rem;
  text-transform: uppercase;
`;

export const ReadmoreItem = styled.div`
  border-bottom: 1px solid #757474;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 -12px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  &:last-child {
    border-bottom: none;
  }
  amp-img {
    float: left;
    width: 120px;
    height: 80px;
    margin: 0 10px 0 0;
  }
`;

export const ReadmoreItemTitle = styled.p`
  color: #000;
  font-size: 17px;
  line-height: 19.2px;
`;
