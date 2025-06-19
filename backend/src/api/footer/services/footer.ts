/**
 * footer service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::footer.footer",
  ({ strapi }) => ({
    async find() {
      const footer = await strapi.documents("api::footer.footer").findFirst({
        populate: {
          contacts: {
            fields: ["phone", "phoneOwner"],
            populate: {
              socialLink: {
                populate: {
                  iconLight: {
                    fields: ["url"],
                  },
                },
                fields: ["url"],
              },
            },
          },
        },
      });
      return footer as any;
    },
  })
);
