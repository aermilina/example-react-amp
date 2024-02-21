import React from "react";
import * as S from "./styled";
import AuthorBlock from "./AuthorBlock";
import { Author, Date } from "../../types";

interface Props {
  authors?: Author[];
  date?: Date;
  photoauthors?: Author[];
}

export default function StoryBottom({ authors, date, photoauthors }: Props) {
  const { day, month, year } = date || {};

  return (
    <S.StoryBottom>
      <S.BottomFirstLine>
        {authors &&
          authors.map((author) => (
            <AuthorBlock key={author.id} author={author} />
          ))}
      </S.BottomFirstLine>
      <S.BottomSecondLine>
        <div>
          {day && day < 10 ? `0${day}.` : `${day}.`}
          {month && month < 10 ? `0${month}.` : `${month}.`}
          {year}
        </div>
        {photoauthors &&
          photoauthors.map((photoauthor) => (
            <AuthorBlock
              key={photoauthor.id}
              author={photoauthor}
              photoAuthor
            />
          ))}
      </S.BottomSecondLine>
    </S.StoryBottom>
  );
}
