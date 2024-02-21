import React from "react";
import { Story } from "../../types";
import * as S from "./styled";
import ReadmoreBlock from "../ReadmoreBlock";
import StoryBottom from "../StoryBottom";
import SocialButtons from "../SocialButtons";
import Advert from "../Advert";

interface Props {
  story?: Story;
  serverName: string;
  announcements?: Story[];
  topics?: Story[];
  puid1?: string;
  puid2?: string;
  puid3?: string;
  puid4?: string;
  puid5?: string;
  puid6?: string;
  puid7?: string;
  puid8?: string;
  puid9?: string;
  puid10?: string;
}

export default function Content({
  story,
  serverName,
  puid1,
  puid2,
  puid3,
  puid4,
  puid5,
  puid6,
  puid7,
  puid8,
  puid9,
  puid10,
}: Props) {
  const {
    name,
    announcementXml,
    href,
    contentAmp,
    readmoreForTurbo,
    authors,
    photoAuthors,
    date,
    ampUrl,
    picture,
  } = story || {};
  return (
    <S.ContentWrapper>
      <S.Article>
        <h1>{name}</h1>
        <S.Description>{announcementXml}</S.Description>
        <S.ReadmoreButton href={`https://${serverName}${href}`}>
          Полная версия
        </S.ReadmoreButton>
        <S.AdvertSlot>
          <Advert
            slotId="ad1"
            puid1={puid1}
            puid2={puid2}
            puid3={puid3}
            puid4={puid4}
            puid5={puid5}
            puid6={puid6}
            puid7={puid7}
            puid8={puid8}
            puid9={puid9}
            puid10={puid10}
          />
        </S.AdvertSlot>
        <S.StoryContent
          dangerouslySetInnerHTML={{ __html: contentAmp || "" }}
        />
        <S.StoryNoteSubscribe>
          <p>Подпишитесь на «За рулем» в</p>
          <S.StoryNoteSubscribeLink
            href="https://clck.ru/36ri2e"
            target="_blank"
          />
        </S.StoryNoteSubscribe>
      </S.Article>
      <S.AdvertSlot>
        <Advert slotId="ad2" />
      </S.AdvertSlot>
      {readmoreForTurbo && <ReadmoreBlock stories={readmoreForTurbo} />}
      <StoryBottom authors={authors} photoauthors={photoAuthors} date={date} />
      <SocialButtons
        serverName={serverName}
        ampUrl={ampUrl || ""}
        name={name || ""}
        picture={picture}
      />
      <Advert slotId="ad3" />
    </S.ContentWrapper>
  );
}
