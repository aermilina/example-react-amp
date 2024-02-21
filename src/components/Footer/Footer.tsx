import React from "react";
import * as S from "./styled";
import { socialProviders } from "../../constants";

export default function Footer() {
  return (
    <S.Footer>
      <S.FooterInfo>
        <S.LogoBlock>
          <S.LogoLink href="https://www.zr.ru" />
        </S.LogoBlock>
        <S.SocialLinks>
          {socialProviders.map((provider) => {
            const { href, icoGray, title } = provider;
            if (href) {
              return (
                <S.ShareLink
                  key={href}
                  href={href}
                  title={title}
                  $ico={icoGray}
                >
                  {title}
                </S.ShareLink>
              );
            }
          })}
        </S.SocialLinks>
      </S.FooterInfo>
      <S.FooterInfo>
        <S.Copyright>
          ©&nbsp;1928&nbsp;–&nbsp; Интернет издание «За рулем»
        </S.Copyright>
        <S.AgeRestriction />
      </S.FooterInfo>
    </S.Footer>
  );
}
