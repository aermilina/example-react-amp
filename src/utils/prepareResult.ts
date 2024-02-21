import { State } from "../types";

export default function prepareResult(state: State): State {
  const { global, content} = state;

  const { info, wholeSite, newMenu, bannerPlacements, nav } = global;

  return {
    global: {
      info,
      wholeSite,
      newMenu,
      bannerPlacements,
      nav,
    },
    content
  };
}
