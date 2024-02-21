import React from "react";
import { Helmet } from "react-helmet-async";
import { Story } from "../../types";
import MetaImg from "./MetaImg";
import MetaAuthors from "./MetaAuthors";
import MetaSchema from "./MetaSchema";

interface Props {
  story?: Story;
  serverName: string;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export default function Meta({
  story,
  serverName,
  title,
  description,
  keywords,
  url,
}: Props) {
  const { href, picture, name, dateISO, rubrics, authors } = story || {};

  const storyHref = `https://${serverName}${href}`;
  const storyKeywords = keywords
    ? `${keywords},${name},журнал За рулем`
    : `${name},журнал За рулем`;
  const imageHref =
    picture && picture.href ? picture.href : picture && picture.servingUrl;
  const imageUrl = `https://${serverName}${imageHref}`;
  const imageWidth = picture && picture.width;
  const imageHeight = picture && picture.height;

  return (
    <>
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="За рулем" />
        {title && (
          <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
          </>
        )}
        <meta name="twitter:domain" content="zr.ru" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zr_ru" />
        <meta name="twitter:creator" content="@zr_ru" />
        <meta property="article:published_time" content={dateISO}></meta>
        {rubrics && rubrics[0] && (
          <meta property="article:section" content={rubrics[0].name} />
        )}
        <meta property="og:url" content={storyHref} />
        <meta name="twitter:url" content={storyHref} />
        <link rel="canonical" href={storyHref} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content={storyKeywords} />
        <meta property="article:tag" content={storyKeywords} />
        <meta name="news_keywords" content={storyKeywords} />
      </Helmet>
      {picture && (
        <MetaImg
          image={imageUrl}
          serverName={serverName}
          width={imageWidth}
          height={imageHeight}
        />
      )}
      {authors && <MetaAuthors authors={authors} />}
      <MetaSchema
        url={url}
        story={story}
        serverName={serverName}
        image={imageUrl}
        title={title}
        description={description}
      />
    </>
  );
}
