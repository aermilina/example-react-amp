import React from "react";
import * as S from "./styled";
import { Story, NavLink } from "../../types";
import { getSpecialStory } from "../../utils";
import GranPriIcon from "../assets/30year.svg";

interface Props {
  topStories?: Story[];
  announcements?: Story[];
  secondMenu?: NavLink[];
  story: Story;
}

export default function Header({
  story,
  topStories,
  announcements,
  secondMenu,
}: Props) {
  const project = getSpecialStory(story);
  const { sticker, widthSpecial, color, secondNav, logoLink } = project || {};
  const secondHeader = secondNav ? secondNav : secondMenu;

  return (
    <>
      <S.Header data-custom-attribs="next-page-hide">
        <S.Logo>
          <S.LogoPic href={logoLink ? logoLink : "/"} />
          {project && (
            <>
              <S.SpecialMarkContainer $color={color} $width={widthSpecial}>
                <S.SpecialMark $color={color}>
                  <span>{project.name}</span>
                </S.SpecialMark>
              </S.SpecialMarkContainer>
              {sticker && (
                <S.Sticker href={logoLink}>
                  <span>{project.name}</span>
                </S.Sticker>
              )}
            </>
          )}
          {project && project["name"] === "Гран-при" && (
            <S.BrthCoin $marginBottom={-5} $birthIcon={GranPriIcon} href="/" />
          )}
        </S.Logo>
        <S.HamburgerSitemap>
          <S.HamburgerButton on="tap:sidebar1.toggle"></S.HamburgerButton>
        </S.HamburgerSitemap>
      </S.Header>
      {secondHeader && (
        <S.HeaderTags data-custom-attribs="next-page-hide">
          <amp-base-carousel
            id="carousel-nav"
            layout="responsive"
            width="1"
            height="1"
            visible-count="1"
          >
            {secondHeader.map((item) => {
              const { href, name } = item;
              return (
                <a key={href} href={href}>
                  {name}
                </a>
              );
            })}
            <S.ArrowPrev slot="prev-arrow" aria-label="Previous" />
            <S.ArrowNext slot="next-arrow" aria-label="Next" />
          </amp-base-carousel>
        </S.HeaderTags>
      )}
    </>
  );
}
