/**
 * home-page service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(params = {}) {
      const [entities, communities, events] = await Promise.all([
        strapi.documents("api::home-page.home-page").findMany({
          populate: {
            hero: {
              populate: {
                photo: {
                  fields: ["url"],
                },
              },
            },
            contacts: true,
            calendar: true,
            aboutUs: {
              populate: {
                we: {
                  populate: {
                    image: {
                      fields: ["url"],
                    },
                  },
                },
                mission: {
                  populate: {
                    image: {
                      fields: ["url"],
                    },
                  },
                },
                financing: {
                  populate: {
                    image: {
                      fields: ["url"],
                    },
                  },
                },
              },
            },
            residents: true,
            donation: true,
            bePartner: {
              populate: "*",
            },
            partners: true,
          },
        }),

        strapi.documents("api::community.community").findMany({
          populate: {
            logo: {
              fields: ["url"],
            },
          },
          fields: ["name", "url", "type"],
          status: "published",
        }),

        strapi.service("api::event.event").getShortCalendar(),
      ]);

      if (!entities || !entities.length) {
        return null;
      }

      const homePage = entities[0];

      const residents = communities.filter((c) => c.type === "resident");

      // Если в компоненте residents есть поле residents, подставляем туда список сообществ
      if (homePage.residents) {
        homePage.residents.residents = residents;
      }

      const partners = communities.filter((c) => c.type === "partner");

      if (homePage.partners) {
        homePage.partners.partners = partners;
      }

      if (homePage.calendar) {
        homePage.calendar.events = events;
      }

      return homePage as any;
    },
  })
);
