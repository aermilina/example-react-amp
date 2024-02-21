declare module "*.svg" {
  import React = require("react");

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const url: string;
  export default url;
}
declare module "*.jpg" {
  const url: string;
  export default url;
}

declare const CACHE_SERVER_URL: string;
declare const CACHE_CLIENT_URL: string;
declare const API_KEY: string;
