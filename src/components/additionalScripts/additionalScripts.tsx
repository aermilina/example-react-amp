import React from "react";
import { Helmet } from "react-helmet-async";
import { Story } from "../../types";

interface Props {
  story: Story;
  announcementStories?: Story[];
  topStories?: Story[];
}

export default function AdditionalScripts({
  story,
  announcementStories,
  topStories,
}: Props) {
  const { dontshowInAMP, ampIframeExists } = story || {};
  return (
    <>
      {(announcementStories || topStories) && (
        <Helmet>
          <script
            async
            custom-element="amp-next-page"
            src="https://cdn.ampproject.org/v0/amp-next-page-1.0.js"
          />
        </Helmet>
      )}
      {dontshowInAMP && (
        <Helmet>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
      )}
      {ampIframeExists && (
        <Helmet>
          <script
            async
            custom-element="amp-iframe"
            src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
          />
        </Helmet>
      )}
    </>
  );
}
