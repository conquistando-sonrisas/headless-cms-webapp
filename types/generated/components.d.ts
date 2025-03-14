import type { Schema, Struct } from '@strapi/strapi';

export interface NosotrosCultura extends Struct.ComponentSchema {
  collectionName: 'components_nosotros_culturas';
  info: {
    displayName: 'cultura';
  };
  attributes: {
    contenido: Schema.Attribute.RichText;
    tipo: Schema.Attribute.String;
  };
}

export interface NosotrosMision extends Struct.ComponentSchema {
  collectionName: 'components_nosotros_misions';
  info: {
    displayName: 'mision';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nosotros.cultura': NosotrosCultura;
      'nosotros.mision': NosotrosMision;
    }
  }
}
