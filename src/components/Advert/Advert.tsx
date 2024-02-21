import React from "react";
import { AdvertConfig } from "./AdvertConfig";

interface Props {
  slotId: string;
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

export default function Advert({
  slotId,
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
  const slot = AdvertConfig[slotId];
  const { type, width, height, ownerId, pp, ps, p2, insertPuid } = slot;

  const params = {
    pp: pp || "",
    p2: p2 || "",
    ps: ps || "",
    puid1: insertPuid ? puid1 : "",
    puid2: insertPuid ? puid2 : "",
    puid3: insertPuid ? puid3 : "",
    puid4: insertPuid ? puid4 : "",
    puid5: insertPuid ? puid5 : "",
    puid6: insertPuid ? puid6 : "",
    puid7: insertPuid ? puid7 : "",
    puid8: insertPuid ? puid8 : "",
    puid9: insertPuid ? puid9 : "",
    puid10: insertPuid ? puid10 : "",
  };
  const AdfoxParams = `${JSON.stringify(params)}`;

  if (type === "yandex") {
    return (
      <amp-ad
        width={width}
        height={height}
        type={type}
        data-block-id={ownerId}
        data-html-access-allowed="true"
      />
    );
  }
  return (
    <amp-ad
      width={width}
      height={height}
      type={type}
      data-owner-id={ownerId}
      data-adfox-params={`${AdfoxParams}`}
    >
      <div data-custom-attribs="placeholder"></div>
      <div data-custom-attribs="fallback"></div>
    </amp-ad>
  );
}
