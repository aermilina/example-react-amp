import React from "react";
import { NavLink, Story } from "../../types";
import * as S from "./styled";
import { getSpecialStory } from "../../utils";

interface Props {
  nav?: NavLink[];
  textpages?: NavLink[];
  serverName: string;
  story: Story;
}

export default function Sidebar({ textpages, serverName, story, nav }: Props) {
  const project = getSpecialStory(story);
  const { mainNav } = project || {};
  const mainNavigation = mainNav || nav || [];
  return (
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
      <S.CloseButton on="tap:sidebar1.close">Закрыть</S.CloseButton>
      <S.MainNav>
        {mainNavigation?.map((item) => {
          const { name, href } = item;
          return (
            <li key={href}>
              <a href={`https://${serverName}${href}`}>{name}</a>
            </li>
          );
        })}
      </S.MainNav>
      <ul>
        {textpages?.map((textpage) => {
          const { name, href } = textpage;
          return (
            <li key={href}>
              <a href={`https://${serverName}${href}`}>{name}</a>
            </li>
          );
        })}
      </ul>
    </amp-sidebar>
  );
}
