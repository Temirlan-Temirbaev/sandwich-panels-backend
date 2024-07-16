import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductFieldProductField extends Schema.Component {
  collectionName: 'components_product_field_product_fields';
  info: {
    displayName: 'product_field';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-field.product-field': ProductFieldProductField;
    }
  }
}
