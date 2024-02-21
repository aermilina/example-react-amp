import fetch from "isomorphic-fetch";
import { State } from "./types";
import { prepareResult } from "./utils";

export default async function fetchApi(uri: string) {
  const headers = {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  const requestUrl = `${uri}`;

  const response = await fetch(requestUrl, {
    method: "GET",
    headers,
  });
  const result: State = await response.json();
  const prepared = prepareResult(result);
  return prepared;
}
