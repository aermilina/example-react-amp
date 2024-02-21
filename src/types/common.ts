export type State = CommonState;

interface CommonState {
  global: Global;
  content: Content;
}

export interface Global {
  info?: {
    date: Date;
    name: string;
    requestURI: string;
    serverName: string;
    windowName?: string;
    documentName?: string;
  };
  wholeSite?: {
    textPages: NavLink[];
  };
  newMenu?: {
    secondMenu?: NavLink[];
  };
  bannerPlacements?: {
    puid1?: string[];
    puid2?: string[];
    puid3?: string[];
    puid4?: string[];
    puid5?: string[];
    puid6?: string[];
    puid7?: string[];
    puid8?: string[];
    puid9?: string[];
    puid10?: string[];
  };
  nav?: {
    navigation: {
      branches: NavLink[];
    };
  };
}

export interface NavLink {
  href: string;
  id?: number;
  name?: string;
  showInNavigation?: boolean;
  order?: number;
  selected?: boolean;
  hone?: string;
  blank?: boolean;
  hexColor?: string;
}

export interface Picture {
  href?: string;
  servingUrl?: string;
  title?: string;
  _comment?: string;
  width?: number;
  height?: number;
  size?: number;
}

export interface Author {
  avatar?: Picture;
  name: string;
  href?: string;
  id?: number;
  sex?: {
    id: number;
    name: string;
  };
}

export interface Story {
  href?: string;
  id: number;
  name?: string;
  "data-type"?: string;
  announcementXml?: string;
  picture?: Picture;
  contentAmp: string;
  authors?: Author[];
  textAuthor?: string;
  _type: string;
  date?: Date;
  published: boolean;
  rubrics?: NavLink[];
  tags?: NavLink[];
  photoGallery?: boolean;
  videoGallery?: boolean;
  readmoreForTurbo?: Story[];
  dontshowInAMP?: boolean;
  ampIframeExists?: boolean;
  dateISO?: string;
  photoAuthors?: Author[];
  ampUrl: string;
  isGranpri?: boolean;
  isGranpriComAuto?: boolean;
}

export interface Date {
  day?: number;
  month?: number;
  year?: number;
  monthName?: string;
  _hour?: string;
  _minute?: string;
}

export interface Content {
  main: {
    story: Story;
    seo?: {
      searchTitle?: string;
      searchDescription?: string;
      searchKeywords?: string;
    };
  };
  topicOfTheDay?: {
    stories?: Story[];
  };
  announcementOnMainHeader?: {
    stories?: Story[];
  };
}
