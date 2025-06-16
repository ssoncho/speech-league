/**
 * event controller
 */

import { factories } from "@strapi/strapi";
import { errors } from "@strapi/utils";

export default factories.createCoreController(
  "api::event.event",
  ({ strapi }) => ({
    async isUserRegisteredOnEvent(ctx) {
      const user = ctx.state.user;
      let isRegistered = false;
      if (user != null) {
        const eventId = ctx.params.id;
        isRegistered = await strapi
          .service("api::event.event")
          .isUserRegistered(user, eventId);
      }
      ctx.body = { isRegistered: isRegistered };
    },

    async registerUserOnEvent(ctx) {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized();
      }
      const eventId = ctx.params.id;

      try {
        await strapi
          .service("api::event.event")
          .registerUserOnEvent(user.documentId, eventId);
        return ctx.created({ message: "Registered successfully" });
      } catch (e: any) {
        if (e instanceof errors.ValidationError) {
          return ctx.badRequest(e.message, e.details);
        } else if (e instanceof errors.NotFoundError) {
          return ctx.notFound(e.message, e.details);
        }
        return ctx.internalServerError();
      }
    },

    async unregisterUserOnEvent(ctx) {
      const user = ctx.state.user;
      if (!user) {
        return ctx.unauthorized();
      }
      const eventId = ctx.params.id;

      try {
        await strapi
          .service("api::event.event")
          .unregisterUserOnEvent(user.documentId, eventId);
        return ctx.send({ message: "Unregistered successfully" }, 200);
      } catch (e: any) {
        strapi.log.error("Unregister error:", e);
        if (e instanceof errors.ValidationError) {
          return ctx.badRequest(e.message, e.details);
        } else if (e instanceof errors.NotFoundError) {
          return ctx.notFound(e.message, e.details);
        }
        return ctx.internalServerError();
      }
    },
  })
);
