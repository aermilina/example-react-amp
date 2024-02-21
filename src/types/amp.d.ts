import React from "react";

declare global {
  namespace JSX {
    interface CustomAttributes {
      amp?: string;
      config?: string;
      layout?: string;
      side?: string;
    }

    type AmpTag = React.DetailedHTMLProps<
      React.HTMLProps<HTMLElement>,
      HTMLELEMENT
    > &
      CustomAttributes;
    interface IntrinsicElements {
      interaction: { id: string };
      "amp-analytics": AmpTag;
      "amp-pixel": AmpTag;
      "amp-sidebar": AmpTag;
      "amp-mega-menu": AmpTag;
      "amp-base-carousel": AmpTag;
      "amp-ad": AmpTag;
      "amp-img": AmpTag;
      "amp-social-share": AmpTag;
      "amp-next-page": AmpTag;
      "amp-ad": AmpTag;
    }
  }
}
