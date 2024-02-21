import React from "react";
import {
  gtagParams,
  metrika1Params,
  metrika2Params,
  liveinternetParams,
  top100Params,
  topMailruParams,
} from "./CountersConfig";

export default function Counters() {
  return (
    <>
      <amp-analytics type="gtag" data-credentials="include">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gtagParams) }}
        />
      </amp-analytics>
      <amp-analytics type="metrika" id="metrika1">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metrika1Params) }}
        />
      </amp-analytics>
      <amp-analytics type="metrika" id="metrika2">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metrika2Params) }}
        />
      </amp-analytics>
      <amp-analytics id="analytics_liveinternet">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(liveinternetParams),
          }}
        />
      </amp-analytics>
      <amp-analytics
        type="top100"
        id="top100"
        config="https://kraken.rambler.ru/amp/config.json"
      >
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(top100Params) }}
        />
      </amp-analytics>
      <amp-analytics type="topmailru" id="topmailru">
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(topMailruParams) }}
        />
      </amp-analytics>
      <amp-pixel src="//www.tns-counter.ru/V13a****zarulem_ru/ru/UTF-8/tmsec=zr_site/"></amp-pixel>
    </>
  );
}
