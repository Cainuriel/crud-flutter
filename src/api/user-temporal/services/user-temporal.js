'use strict';

/**
 * user-temporal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-temporal.user-temporal');
