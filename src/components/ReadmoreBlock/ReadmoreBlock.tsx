import React from "react";
import { Story } from "../../types";
import * as S from "./styled";

interface Props {
  stories?: Story[];
}

export default function ReadmoreBlock({ stories }: Props) {
  return (
    <S.ReadmoreContainer>
      <S.ReadmoreTitle>Читайте также</S.ReadmoreTitle>
      {stories?.map((story) => {
        const { href, name, picture } = story;
        return (
          <S.ReadmoreItem key={href}>
            <a href={`${href}`}>
              {picture && (
                <amp-img
                  src={
                    picture.servingUrl
                      ? `${picture.servingUrl}`
                      : `${picture.href}`
                  }
                  alt={picture.title ? picture.title : ""}
                  width="120"
                  height="80"
                />
              )}
              <S.ReadmoreItemTitle>{name}</S.ReadmoreItemTitle>
            </a>
          </S.ReadmoreItem>
        );
      })}
    </S.ReadmoreContainer>
  );
}
