import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    description: '';
    displayName: 'socialLink';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['mailing', 'group']> &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutComponentsAboutUsCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_components_about_us_cards';
  info: {
    displayName: 'aboutUsCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutComponentsBePartnerCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_components_be_partner_cards';
  info: {
    description: '';
    displayName: 'bePartnerCard';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    header: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_layout_aboutuses';
  info: {
    displayName: 'aboutUs';
  };
  attributes: {
    financing: Schema.Attribute.Component<
      'layout-components.about-us-card',
      false
    >;
    mission: Schema.Attribute.Component<
      'layout-components.about-us-card',
      false
    >;
    we: Schema.Attribute.Component<'layout-components.about-us-card', false>;
  };
}

export interface LayoutBePartner extends Struct.ComponentSchema {
  collectionName: 'components_layout_be_partners';
  info: {
    displayName: 'BePartner';
  };
  attributes: {
    business: Schema.Attribute.Component<
      'layout-components.be-partner-card',
      false
    > &
      Schema.Attribute.Required;
    community: Schema.Attribute.Component<
      'layout-components.be-partner-card',
      false
    > &
      Schema.Attribute.Required;
    event: Schema.Attribute.Component<
      'layout-components.be-partner-card',
      false
    > &
      Schema.Attribute.Required;
    partnershipText: Schema.Attribute.Text & Schema.Attribute.Required;
    volunteers: Schema.Attribute.Component<
      'layout-components.be-partner-card',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface LayoutContacts extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    groupsText: Schema.Attribute.Text & Schema.Attribute.Required;
    mailingText: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutDonation extends Struct.ComponentSchema {
  collectionName: 'components_layout_donations';
  info: {
    displayName: 'Donation';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    highlight: Schema.Attribute.Text & Schema.Attribute.Required;
    minDonation: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<50>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutPartners extends Struct.ComponentSchema {
  collectionName: 'components_layout_partners';
  info: {
    description: '';
    displayName: 'partners';
  };
  attributes: {
    partners: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    >;
    thanks: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutResidents extends Struct.ComponentSchema {
  collectionName: 'components_layout_residents';
  info: {
    description: '';
    displayName: 'residents';
  };
  attributes: {
    header: Schema.Attribute.Text & Schema.Attribute.Required;
    residents: Schema.Attribute.Relation<
      'oneToMany',
      'api::community.community'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.link': ComponentsLink;
      'layout-components.about-us-card': LayoutComponentsAboutUsCard;
      'layout-components.be-partner-card': LayoutComponentsBePartnerCard;
      'layout.about-us': LayoutAboutUs;
      'layout.be-partner': LayoutBePartner;
      'layout.contacts': LayoutContacts;
      'layout.donation': LayoutDonation;
      'layout.hero': LayoutHero;
      'layout.partners': LayoutPartners;
      'layout.residents': LayoutResidents;
    }
  }
}
