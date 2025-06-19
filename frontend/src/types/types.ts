type EventType = {
  date: string;
  name: string;
  price: number | null;
  url: string;
  isFreeToPay: boolean;
  community: {
    id: number;
    documentId: string;
    name: string;
  } | null;
  project: {
    id: number;
    documentId: string;
    name: string;
  } | null;
  cover: {
    id: number;
    documentId: string;
    url: string;
  };
  documentId: string
};

type AboutCardType = {
  title: string;
  description: string;
  image: {
    id: number;
    documentId: string;
    url: string;
  };
};

type TeamCardType = {
  aboutMe: string;
  firstName: string;
  lastName: string;
  statuses: string[];
  description: string;
  vkUrl?: string;
  tgUrl?: string;
  photo: {
    url: string;
  };
};

type PartnerCardType = {
  name: string;
  avatar: string;
};

type ResidentCardType = {
  name: string;
  url: string;
  logo: {
    id: number;
    documentId: string;
    url: string;
  };
};

type NavbarItemType = {
  name: string;
  link: string;
  icon: string;
};

export type {
  EventType,
  AboutCardType,
  TeamCardType,
  PartnerCardType,
  ResidentCardType,
  NavbarItemType,
};
