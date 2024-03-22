export enum SOCIAL_TYPE {
  LINKED = 1,
  FACEBOOK = 2,
  TWITTER = 3,
}

export enum CONTACT_TYPE {
  EMAIL = 1,
  PHONE = 2,
}

export enum SEARCH_TYPE {
  CONTACT = 1,
  COMPANY = 2,
}

export enum COMPANY_DETAIL_TAB {
  COMPANY = 1,
  ALL_EMPLOYEE = 2,
}

export const INDEXED_DB = {
  NAME: "LUSHA_DB",
  TABLE: {
    USERS: "USERS",
    RECENT_COMPANIES: "RECENT_COMPANIES",
  },
};
