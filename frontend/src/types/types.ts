type EventType = {
  date: string;
  name: string;
  description: string;
  price: string;
};

type AboutCardType = {
  title: string;
  description: string;
};

type TeamCardType = {
  merits: string | number;
  name: string;
  roles: string[];
  description: string;
  vklink: string;
};

type PartnerCardType = {
  name: string;
  avatar: string
}

type ResidentCardType = {
  name: string;
  icon: string
}

export type { EventType, AboutCardType, TeamCardType, PartnerCardType, ResidentCardType };
