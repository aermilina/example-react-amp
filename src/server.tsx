import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import fetchApi from "./fetchApi";
import { makeApiUrl } from "./utils";
import { Response } from "express-serve-static-core";
import App from "./App";
import generateHtml from "./generateHtml";
import { HelmetProvider } from "react-helmet-async";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

const server = express();
const sheet = new ServerStyleSheet();

server.get("*", ({ url, path }, res) => {
  return handleResponse(url, path, res);
});

async function handleResponse(
  url: string,
  path: string,
  res: Response<unknown, Record<string, unknown>, number>,
) {
  const fetchUrl = makeApiUrl(path);

  try {
    const ssr = await fetchApi(fetchUrl);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const helmetContext = {} as Record<string, any>;

    const html = ReactDOMServer.renderToStaticMarkup(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <StyleSheetManager sheet={sheet.instance}>
            <App data={ssr} />
          </StyleSheetManager>
        </StaticRouter>
      </HelmetProvider>,
    )
      .replace(/<footer/gi, "<footer footer")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/<div data-custom-attribs="placeholder"/gi, "<div placeholder")
      .replace(/<div data-custom-attribs="fallback"/gi, "<div fallback")
      .replace(
        /<header data-custom-attribs="next-page-hide"/gi,
        "<header next-page-hide",
      )
      .replace(
        /<div data-custom-attribs="next-page-hide"/gi,
        "<div next-page-hide",
      );

    const helmet = helmetContext.helmet;
    const css = sheet
      .getStyleTags()
      .replace(/<style data-styled="true"/gi, '<style amp-custom=""');

    res.status(200);
    res.send(generateHtml({ html, css, helmet }));
  } catch (e) {
    res.send(`
        <html lang="ru">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Ошибка 500</title>
        </head>
        <body>
          <div id="root">Похоже, какая то ошибка ${e}</div>
        </body>
      </html>
      `);
    res.status(500);
  }
}

server.listen(3002, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:3002`);
});
