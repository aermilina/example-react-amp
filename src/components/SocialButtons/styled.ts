import styled from "styled-components";
interface Props {
  $ico?: string;
  $icoGray?: string;
}

export const SocialButtons = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding-top: 13px;
`;

export const SocialShare = styled.div`
  span {
    color: #757474;
  }
`;
export const SocialButton = styled.div<Props>`
  amp-social-share {
    margin: 0;
    width: 48px;
    height: 48px;
    background: url(${(props) => props["$icoGray"]}) 0 0 no-repeat;
    background-size: contain;
  }
  amp-social-share:focus {
    outline: none;
    background: url(${(props) => props["$ico"]}) 0 0 no-repeat;
    background-size: contain;
  }
`;
