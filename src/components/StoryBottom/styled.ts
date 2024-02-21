import styled from "styled-components";

export const StoryBottom = styled.div`
  font-family: "Fira Sans Extra Condensed", sans-serif;
`;

export const AuthorAttribs = styled.div`
  display: inline-block;
  margin: 0 5px;
  line-break: normal;
  vertical-align: middle;
`;

export const AuthorName = styled.span`
  display: inline-block;
  padding-left: 10px;
`;

export const AuthorContainer = styled.div`
  color: #1c88d4;
  display: inline-block;
  margin: 0 5px 5px 0;
`;

export const AuthorPic = styled.div`
  display: inline-block;
  vertical-align: middle;
  amp-img {
    border-radius: 50%;
  }
  amp-img img {
    object-fit: cover;
    object-position: 50% 0%;
  }
`;

export const BottomFirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #808080;
  align-items: flex-end;
  padding: 0 12px 6px 12px;
  margin: 0 -12px;
`;

export const BottomSecondLine = styled.div`
  display: flex;
  padding-top: 5px;
  color: #757474;
  align-items: center;
  justify-content: space-between;
`;
