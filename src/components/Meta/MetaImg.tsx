import React from "react";
import { Picture } from "../../types";
import { Helmet } from "react-helmet-async";

interface Props {
  image: string;
  serverName: string;
  width?: number;
  height?: number;
}

export default function MetaImg({ image, serverName, width, height }: Props) {
  return (
    <Helmet>
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image" content={image} />
      {width && <meta property="og:image:width" content={`${width}`} />}
      {height && <meta property="og:image:height" content={`${height}`} />}
      <meta name="twitter:image" content={image}></meta>
    </Helmet>
  );
}
