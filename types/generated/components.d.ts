import type { Struct, Schema } from '@strapi/strapi';

export interface TextblockTextblock extends Struct.ComponentSchema {
  collectionName: 'components_textblock_textblocks';
  info: {
    displayName: 'textblock';
  };
  attributes: {
    contents: Schema.Attribute.RichText;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'textblock.textblock': TextblockTextblock;
      'heading.heading': HeadingHeading;
    }
  }
}
