/**
 * event service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::event.event",
  ({ strapi }) => ({
    async getShortCalendar() {
      const today = new Date().toISOString().split("T")[0];

      const events = await strapi.entityService.findMany("api::event.event", {
        fields: ["name", "url", "isFreeToPay", "price", "date"],
        filters: {
          date: {
            $gte: today, // Фильтр: дата мероприятия сегодня или в будущем
          },
        },
        sort: [
          { date: "asc" }, // Сортировка по дате по возрастанию
        ],
        populate: {
          cover: {
            fields: ["url"],
          },
          community: {
            fields: ["name"],
          },
          project: {
            fields: ["name"],
          },
        },
        limit: 7,
        start: 0,
        status: "published",
      });

      return events;
    },
  })
);
