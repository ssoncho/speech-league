/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";
import { addContactsHomePage } from "../utils/addContactsHomePage";

export default factories.createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);

      const contactsEntities = await strapi
        .documents("api::contacts.contacts")
        .findMany({
          populate: {
            socialLink: {
              populate: {
                icon: {
                  fields: ["url"],
                },
              },
            },
          },
        });
      if (contactsEntities.length) {
        const contacts = contactsEntities[0];
        addContactsHomePage(data, contacts);
      }

      return { data, meta };
    },
  })
);
