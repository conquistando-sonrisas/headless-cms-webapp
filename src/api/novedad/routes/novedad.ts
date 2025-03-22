/**
 * novedad router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::novedad.novedad', {
  config: {
    find: {
      middlewares: ['api::novedad.populate-authors']
    },
    findOne: {
      middlewares: ['api::novedad.populate-authors']
    }
  }
});
