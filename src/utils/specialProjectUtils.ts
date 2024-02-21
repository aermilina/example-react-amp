import { specialProjectsConfig } from "../constants";
import { Story } from "../types";

export default function getSpecialStory(story?: Story) {
  let conf = "";
  if (!story) {
    return undefined;
  }
  const { tags, isGranpri, isGranpriComAuto } = story;

  if (isGranpri) {
    conf = "isGranpri";
  } else if (tags) {
    const tagUrls = tags.map((tag) => tag.href);
    const project = Object.keys(specialProjectsConfig).find((item) => {
      const value = specialProjectsConfig[item];
      const urls = value ? value["urls"] : [];
      const hasUrl = urls.some((url) => tagUrls.includes(url));
      return hasUrl ? value : undefined;
    });

    if (project) {
      conf = project;
    }
  }

  return conf ? specialProjectsConfig[conf] : undefined;
}
