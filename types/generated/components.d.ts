import type { Schema, Attribute } from '@strapi/strapi';

export interface AsdAsdasd extends Schema.Component {
  collectionName: 'components_asd_asdasds';
  info: {
    displayName: 'asdasd';
    icon: 'alien';
  };
  attributes: {
    asdasd: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'asd.asdasd': AsdAsdasd;
    }
  }
}
