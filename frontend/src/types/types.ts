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
};

type AboutCardType = {
  title: string;
  description: string;
};

type TeamCardType = {
  aboutMe: string;
  firstName: string;
  lastName: string;
  statuses: string[];
  description: string;
  vkUrl?: string;
  tgUrl?: string;
};

type PartnerCardType = {
  name: string;
  avatar: string;
};

type ResidentCardType = {
  name: string;
  icon: string;
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
