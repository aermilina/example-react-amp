export const gtagParams = {
  vars: {
    gtag_id: "id",
    config: {
      "id": { groups: "default" },
    },
  },
};

export const metrika1Params = {
  vars: {
    counterId: "id",
  },
};

export const metrika2Params = {
  vars: {
    counterId: "id",
  },
};

export const liveinternetParams = {
  requests: {
    pageview:
      "id",
  },
  triggers: {
    "track pageview": {
      on: "visible",
      request: "pageview",
    },
  },
};

export const top100Params = {
  vars: {
    pid: "id",
  },
};

export const topMailruParams = {
  vars: {
    id: "id",
  },
};
