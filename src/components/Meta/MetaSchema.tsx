import React from "react";
import { Helmet } from "react-helmet-async";
import { Story } from "../../types";
import StoryDefaultAvatar from "../assets/story_avatar_default.png";

interface Props {
  story?: Story;
  serverName: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function MetaSchema({
  story,
  serverName,
  url,
  image,
  title,
  description,
}: Props) {
  const { dateISO, authors } = story || {};

  const author =
    authors &&
    authors.map((author) => {
      return {
        "@type": "Person",
        name: `${author?.name || "За Рулем"}`,
        url: `https://${serverName}${author?.href}`,
        image: `https://www.zr.ru${
          author?.avatar?.href ? author.avatar.href : StoryDefaultAvatar
        }`,
      };
    });

  const schemaArticle = {
    "@context": "http://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${serverName}${url}`,
    },
    datePublished: dateISO,
    headline: title,
    description,
    image: {
      "@type": "ImageObject",
      url: image,
      height: 800,
      width: 800,
    },
    author,
    publisher: {
      "@type": "Organization",
      name: "За Рулем",
      logo: {
        "@type": "ImageObject",
        url: "https://www.zr.ru/f/media/zr-amp-logo.png",
        width: 600,
        height: 60,
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaArticle)}
      </script>
    </Helmet>
  );
}
