/**
 * A set of functions called "actions" for `profile`
 */
import { sanitize } from "@strapi/utils";

export default {
  async getFullInfo(ctx) {
    const user = await strapi
      .documents("plugin::users-permissions.user")
      .findOne({
        documentId: ctx.state.user.documentId,
        populate: {
          photo: {
            fields: ["url"],
          },
        },
      });

    const { provider, confirmed, blocked, username, ...userData } = user;

    const schema = strapi.getModel("plugin::users-permissions.user");
    return await strapi.contentAPI.sanitize.output(userData, schema);
  },

  async getShortInfo(ctx) {
    const user = ctx.state.user;
    const { firstName, lastName, role } = user;
    const result: Record<string, any> = {
      firstName,
      lastName,
      role: role.ruName,
    };
    return ctx.send(result);
  },

  async updateInfo(ctx) {
    const user = ctx.state.user;

    const data = ctx.request.body;
    if (!data) {
      return ctx.badRequest("No data provided for update.");
    }

    try {
      // 4. Обновление пользователя
      const updatedUser = await strapi
        .documents("plugin::users-permissions.user")
        .update({
          documentId: user.documentId,
          data: {
            ...data,
            updatedAt: new Date(),
          },
        });

      const { id, provider, confirmed, blocked, username, ...userData } =
        updatedUser;

      // 5. Санитизация выходных данных
      const schema = strapi.getModel("plugin::users-permissions.user");
      const sanitizedData = await strapi.contentAPI.sanitize.output(
        userData,
        schema
      );

      return ctx.send(sanitizedData);
    } catch (error) {
      strapi.log.error("Profile update error:", error);
      return ctx.badRequest(`${error}`);
    }
  },
};
