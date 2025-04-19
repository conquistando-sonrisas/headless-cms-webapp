import type { Schema, Struct } from '@strapi/strapi';

export interface ContactoPageHorario extends Struct.ComponentSchema {
  collectionName: 'components_contacto_page_horarios';
  info: {
    displayName: 'horario';
    icon: 'clock';
  };
  attributes: {
    abierto: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    dia: Schema.Attribute.String;
    inicio: Schema.Attribute.Time;
    termino: Schema.Attribute.Time;
  };
}

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
      'contacto-page.horario': ContactoPageHorario;
      'nosotros.cultura': NosotrosCultura;
      'nosotros.mision': NosotrosMision;
    }
  }
}
