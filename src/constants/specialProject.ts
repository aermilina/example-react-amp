interface MainNav {
  href: string;
  name?: string;
  blank?: boolean;
  allLine?: boolean;
}

type SpecialProjects = {
  [key: string]: {
    name?: string;
    sticker?: string;
    widthSpecial?: number;
    color?: string;
    logoLink: string;
    urls: string[];
    secondPromo?: boolean;
    mainNav?: MainNav[];
    secondNav?: MainNav[];
    partnerLogo?: {
      image: string;
      href: string;
      blank: boolean;
    };
    footer?: {
      back?: string;
      footerLogo?: string;
      alt?: string;
    };
    BN36?: boolean;
  };
};

export const specialProjectsConfig: SpecialProjects = {
  isGranpri: {
    name: "Гран-при",
    color: "#CE0000",
    secondPromo: false,
    logoLink: "/",
    urls: ["/", "/"],
    mainNav: [
      {
        name: "ГОЛОСОВАТЬ",
        href: "/",
        blank: true,
      },
      {
        name: "НОМИНАНТЫ",
        href: "/",
        blank: false,
      },
      {
        name: "ПАРТНЕРЫ",
        href: "/",
        blank: false,
      },
      {
        name: "ПРИЗЫ",
        href: "/",
        blank: false,
      },
    ],
    secondNav: [
      {
        name: "История премии",
        href: "/",
        blank: false,
      },
      { name: "Новинки", href: "/tags", blank: false },
      { name: "Кроссоверы", href: "/tags/", blank: false },
      {
        name: "Доступные авто",
        href: "/tags/",
        blank: false,
      },
      {
        name: "Китайский автопром",
        href: "/tags/",
        blank: false,
      },
      {
        name: "Коммерческие автомобили",
        href: "/tags/",
        blank: false,
      },
    ],
    BN36: false,
  }};