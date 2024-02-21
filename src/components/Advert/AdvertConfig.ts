const OWNERID = 0;

type AdvertSlots = {
  [key: string]: {
    width: number;
    height: number;
    type: string;
    ownerId: string | number;
    pp?: string;
    ps?: string;
    p2?: string;
    insertPuid?: boolean;
  };
};

export const AdvertConfig: AdvertSlots = {
  ad1: {
    width: 300,
    height: 300,
    type: "adfox",
    ownerId: OWNERID,
    pp: "g",
    ps: "ciji",
    p2: "fqyz",
    insertPuid: true,
  },
  ad2: {
    width: 300,
    height: 300,
    type: "yandex",
    ownerId: "",
  },
  ad3: {
    width: 300,
    height: 300,
    type: "adfox",
    ownerId: OWNERID,
    pp: "i",
    ps: "ciji",
    p2: "fqyz",
    insertPuid: false,
  },
};
