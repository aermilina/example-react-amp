import styled from "styled-components";
import DzenIco from "../assets/dzen-24.svg";

export const ContentWrapper = styled.div`
  padding: 1rem 12px;
`;
export const Article = styled.article`
    h1{
        margin: 0 0 1rem;
        padding:0;
    }
    table{
        background-color: white;
        border-collapse: collapse;
        border: 1px solid #ccc;
        border-spacing: 0;
        font-size: 0.875rem;
        width: 100%;
        font-family: "Fira Sans Extra Condensed", sans-serif;
        text-align: left;
        overflow: hidden;
        word-break: normal; 
    }
    tbody{
        display: table-row-group;
      vertical-align: middle;
      border-color: inherit; 
    }
    td,th,tr{
        vertical-align: middle;
    }
    table td {
        border-top: 1px solid #dadadc;
    }
    table td, article table th {
        text-align: left;
        padding: 4px;
        width: auto;
        word-break: break-word;
        overflow: hidden;
      }
      .img-inner {
        margin: 1rem 0;
      }
      ul {
        padding: 0;
      }
      ul li {
        padding: 0;
        margin: 0 0 .3em 19px;
        list-style-type: disc;

`;

export const Description = styled.div`
  font-size: 21px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const ReadmoreButton = styled.a`
  display: block;
  font-size: 29px;
  font-weight: 500;
  color: #970000;
  text-transform: uppercase;
  text-align: center;
  line-height: 48px;
  background: transparent;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #970000;
  cursor: pointer;
  margin: 33px 0 36px 0;
`;

export const StoryContent = styled.div`
  font-size: 17px;
  line-height: 22.6px;
  font-weight: normal;

  p {
    margin: 0 0 1rem;
  }

  h2,
  h3,
  h4 {
    margin-top: 1rem;
  }
`;

export const StoryNoteSubscribe = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  margin: 29px 0 66px 0;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    display: block;
    position: relative;
    margin: 0;
  }
`;

export const StoryNoteSubscribeLink = styled.a`
  display: block;
  background: url(${DzenIco}) 0 0 no-repeat;
  background-size: cover;
  width: 80px;
  height: 24px;
`;

export const AdvertSlot = styled.div`
  display: block;
  text-align: center;
  margin: 0 0 10px 0;
`;
