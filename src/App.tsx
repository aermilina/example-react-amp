import React from "react";
import { State } from "./types";
import {
  AdditionalScripts,
  Meta,
  Counters,
  Sidebar,
  Header,
  Content,
  NextPageBlock,
  Footer,
} from "./components";
import * as S from "./App.styled";

interface Props {
  data: State;
}

export default function App({ data }: Props) {
  const { main, topicOfTheDay, announcementOnMainHeader } = data.content;
  const { info, wholeSite, newMenu, bannerPlacements, nav } = data.global;
  const { navigation } = nav || {};
  const { branches } = navigation || {};
  const {
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
  } = bannerPlacements || {};
  const { serverName = "", requestURI = "" } = info || {};
  const { textPages } = wholeSite || {};
  const { secondMenu } = newMenu || {};
  const { story, seo } = main;
  const { name, announcementXml, id } = story || {};
  const topStories = topicOfTheDay && topicOfTheDay.stories;
  const announcements =
    announcementOnMainHeader && announcementOnMainHeader.stories;
  const { searchDescription, searchTitle, searchKeywords } = seo || {};
  const title = searchTitle ? searchTitle : name;
  const description = searchDescription ? searchDescription : announcementXml;
  return (
    <>
      <S.Wrapper>
        <AdditionalScripts
          story={story}
          topStories={topStories}
          announcementStories={announcements}
        />
        <Meta
          story={story}
          serverName={serverName}
          title={title}
          description={description}
          keywords={searchKeywords}
          url={requestURI}
        />
        <Counters />
        <Sidebar
          serverName={serverName}
          textpages={textPages}
          story={story}
          nav={branches}
        />
        <Header
          story={story}
          topStories={topStories}
          announcements={announcements}
          secondMenu={secondMenu}
        />
        <Content
          story={story}
          serverName={serverName}
          announcements={announcements}
          topics={topStories}
          puid1={puid1 ? puid1[0] : ""}
          puid2={puid2 ? puid2[0] : ""}
          puid3={puid3 ? puid3[0] : ""}
          puid4={puid4 ? puid4[0] : ""}
          puid5={puid5 ? puid5[0] : ""}
          puid6={puid6 ? puid6[0] : ""}
          puid7={puid7 ? puid7[0] : ""}
          puid8={puid8 ? puid8[0] : ""}
          puid9={puid9 ? puid9[0] : ""}
          puid10={puid10 ? puid10[0] : ""}
        />
      </S.Wrapper>
      {announcements || topStories ? (
        <NextPageBlock
          announcements={announcements}
          topics={topStories}
          id={id}
          serverName={serverName}
        />
      ) : (
        <Footer />
      )}
    </>
  );
}
