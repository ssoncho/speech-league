/**
 * home-page service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(params = {}) {
      const entities = await strapi
        .documents("api::home-page.home-page")
        .findMany({
          populate: {
            hero: true,
            contacts: true,
            aboutUs: {
              populate: "*",
            },
            residents: true,
            donation: true,
            bePartner: {
              populate: "*",
            },
            partners: true,
          },
        });

      if (!entities || !entities.length) {
        return null;
      }

      const homePage = entities[0];

      const residents = await strapi
        .documents("api::community.community")
        .findMany({
          filters: { type: "resident" },
          fields: ["name", "url"],
        });

      // Если в компоненте residents есть поле residents, подставляем туда список сообществ
      if (homePage.residents) {
        homePage.residents.residents = residents;
      }

      const partners = await strapi
        .documents("api::community.community")
        .findMany({
          filters: { type: "partner" },
          fields: ["name", "url"],
        });

      if (homePage.partners) {
        homePage.partners.partners = partners;
      }

      return homePage as any;
    },
  })
);
