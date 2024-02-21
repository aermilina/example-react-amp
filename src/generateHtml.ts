import { HelmetProps } from "react-helmet-async";

interface Props {
  html: string;
  css: string;
  helmet: HelmetProps;
}

export default function generateHtml({ html, css, helmet }: Props) {
  return `<!DOCTYPE html>
        <html amp lang="ru">
        <head>
            ${css}
            ${helmet.title}
            ${helmet.meta}
            ${helmet.link}
            ${helmet.script
              ?.toString()
              .replace(/async="true"/gi, 'async="async"')}
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, minimum-scale=1">
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-font" src="https://cdn.ampproject.org/v0/amp-font-0.1.js"></script>
            <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
            <script async custom-element="amp-base-carousel" src="https://cdn.ampproject.org/v0/amp-base-carousel-0.1.js"></script>
            <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
            <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
            <link rel="apple-touch-icon" sizes="57x57" href="https://www.zr.ru/favicons/apple-touch-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="https://www.zr.ru/favicons/apple-touch-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="https://www.zr.ru/favicons/apple-touch-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="https://www.zr.ru/favicons/apple-touch-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="https://www.zr.ru/favicons/apple-touch-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="https://www.zr.ru/favicons/apple-touch-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="https://www.zr.ru/favicons/apple-touch-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="https://www.zr.ru/favicons/apple-touch-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="https://www.zr.ru/favicons/apple-touch-icon-180x180.png">
            <link rel="icon" type="image/png" href="https://www.zr.ru/favicons/favicon-32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="https://www.zr.ru/favicons/android-chrome-192x192.png" sizes="192x192">
            <link rel="icon" type="image/png" href="https://www.zr.ru/favicons/favicon-96x96.png" sizes="96x96">
            <link rel="icon" type="image/png" href="https://www.zr.ru/favicons/favicon-16x16.png" sizes="16x16">
            <link rel="manifest" href="https://www.zr.ru/favicons/manifest.json">
            <link rel="mask-icon" href="https://www.zr.ru/favicons/safari-pinned-tab.svg" color="#993f3f">
            <link rel="shortcut icon" href="https://www.zr.ru/favicons/favicon.ico">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="msapplication-TileImage" content="https://www.zr.ru/favicons/mstile-144x144.png">
            <meta name="msapplication-config" content="https://www.zr.ru/favicons/browserconfig.xml">
            <meta name="theme-color" content="#ffffff">
            <meta charset="UTF-8">
            <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
            <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
            <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
            </head>
        <body>
         ${html}
        </body>
        </html>
            `;
}
