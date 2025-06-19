/**
 * event service
 */

import { factories } from "@strapi/strapi";
import { errors } from "@strapi/utils";

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
    async isUserRegistered(
      user: { documentId: string; eventsPlannedGo?: { documentId: string }[] },
      eventId: string
    ): Promise<boolean> {
      const userDoc = await strapi
        .documents("plugin::users-permissions.user")
        .findOne({
          documentId: user.documentId,
          populate: {
            eventsPlannedGo: {
              fields: ["id"],
            },
          },
        });
      // Если поле отсутствует или пустое — возвращаем false
      const list = userDoc?.eventsPlannedGo;
      if (!Array.isArray(list) || list.length === 0) {
        return false;
      }
      // Проверяем наличие события
      return list.some((ev) => ev.documentId === eventId);
    },

    async registerUserOnEvent(
      userId: string,
      eventId: string
    ): Promise<boolean> {
      // 1. Проверяем, существует ли событие
      const event = await strapi
        .documents("api::event.event")
        .findOne({ documentId: eventId });
      if (!event) {
        throw new errors.NotFoundError(
          `Event with id=${eventId} does not exist`
        );
      }

      // 2. Проверяем, что пользователь существует
      const user = await strapi
        .documents("plugin::users-permissions.user")
        .findOne({
          documentId: userId,
          populate: {
            eventsPlannedGo: { fields: [] },
          },
          fields: [],
        });
      if (!user) {
        throw new errors.NotFoundError(`User with id=${userId} not found`);
      }

      const alreadyRegistered =
        Array.isArray(user.eventsPlannedGo) &&
        user.eventsPlannedGo.some((ev) => ev.documentId === eventId);

      if (alreadyRegistered) {
        throw new errors.ValidationError("User has been already registered");
      }

      // 3. Обновляем пользователя, подключая событие
      await strapi.documents("plugin::users-permissions.user").update({
        documentId: userId,
        data: {
          eventsPlannedGo: {
            connect: [eventId],
          },
        },
      });

      return true;
    },

    async unregisterUserOnEvent(
      userId: string,
      eventId: string
    ): Promise<boolean> {
      // 1. Убедиться, что событие существует
      const event = await strapi
        .documents("api::event.event")
        .findOne({ documentId: eventId });
      if (!event) {
        throw new errors.NotFoundError(
          `Event with id=${eventId} does not exist`
        );
      }

      // 2. Получить пользователя c populated relations
      const user = await strapi
        .documents("plugin::users-permissions.user")
        .findOne({
          documentId: userId,
          populate: {
            eventsPlannedGo: { fields: [] },
          },
          fields: [],
        });
      if (!user) {
        throw new errors.NotFoundError(`User with id=${userId} not found`);
      }

      const isRegistered =
        Array.isArray(user.eventsPlannedGo) &&
        user.eventsPlannedGo.some((ev) => ev.documentId === eventId);

      if (!isRegistered) {
        throw new errors.ValidationError(
          "User is not registered to this event"
        );
      }

      // 3. Отсоединить событие от пользователя
      await strapi.documents("plugin::users-permissions.user").update({
        documentId: userId,
        data: {
          eventsPlannedGo: {
            disconnect: [eventId],
          },
        },
      });

      return true;
    },
  })
);
