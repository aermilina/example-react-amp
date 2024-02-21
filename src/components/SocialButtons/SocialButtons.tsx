import React from "react";
import * as S from "./styled";
import { Picture } from "../../types";
import { socialProviders } from "../../constants";

interface Props {
  ampUrl: string;
  picture?: Picture;
  name: string;
  serverName: string;
}

export default function SocialButtons({
  serverName,
  ampUrl,
  picture,
  name,
}: Props) {
  const pictureUrl = picture?.servingUrl
    ? `${picture?.servingUrl}`
    : `${picture?.href}`;
  const shareUrl = `https://${serverName}${ampUrl}`;

  return (
    <S.SocialShare>
      <span>Поделиться:</span>
      <S.SocialButtons>
        {socialProviders.map((provider) => {
          const { endpoint, label, type, share, ico, icoGray } = provider;
          const endpointUrl =
            type === "viber" || type === "ok" ? endpoint + shareUrl : endpoint;
          if (share) {
            return (
              <S.SocialButton key={type} $ico={ico} $icoGray={icoGray}>
                <amp-social-share
                  type={type}
                  data-param-title={name}
                  data-param-image={picture ? pictureUrl : ""}
                  data-share-endpoint={endpointUrl}
                  data-param-url={shareUrl}
                  aria-label={label}
                />
              </S.SocialButton>
            );
          }
        })}
      </S.SocialButtons>
    </S.SocialShare>
  );
}
