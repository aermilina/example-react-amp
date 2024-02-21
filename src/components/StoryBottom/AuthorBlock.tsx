import React from "react";
import * as S from "./styled";
import { Author } from "../../types";
import DefaultAvatar from "../assets/story_avatar_default.png";

interface Props {
  author: Author;
  photoAuthor?: boolean;
}

export default function AuthorBlock({ author, photoAuthor }: Props) {
  const { name, href, avatar } = author;
  const avatarUrl = avatar?.servingUrl
    ? `${avatar?.servingUrl}`
    : `${avatar?.href}`;
  if (photoAuthor) {
    return (
      <S.AuthorAttribs>
        <S.AuthorName>{`Фото: ${name}`}</S.AuthorName>
      </S.AuthorAttribs>
    );
  }

  return (
    <S.AuthorContainer>
      <S.AuthorPic>
        <amp-img
          src={avatar && avatarUrl ? avatarUrl : DefaultAvatar}
          width="30"
          height="30"
          alt={name}
        />
      </S.AuthorPic>
      <S.AuthorAttribs>
        <S.AuthorName>{name}</S.AuthorName>
      </S.AuthorAttribs>
    </S.AuthorContainer>
  );
}
