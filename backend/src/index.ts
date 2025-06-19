import type { Core } from "@strapi/strapi";
import { fdatasync } from "fs";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["plugin::users-permissions.user"],

      async beforeCreate(event: any) {
        const { data } = event.params;
        if (data?.email) {
          data.username = data.email;
        }
        if (data.lastName || data.firstName || data.patronymic) {
          data.fio = [data.lastName, data.firstName, data.patronymic]
            .filter(Boolean)
            .join(" ");
        }

        // if (data.fio) {
        //   const parts = data.fio.trim().split(/\s+/);
        //   data.lastName = parts[0] || null;
        //   data.firstName = parts[1] || null;
        //   data.patronymic = parts[2] || null;
        // }
      },

      async beforeUpdate(event: any) {
        const { data } = event.params;
        if (data?.email) {
          data.username = data.email;
        }

        if (data.lastName || data.firstName || data.patronymic) {
          data.fio = [data.lastName, data.firstName, data.patronymic]
            .filter(Boolean)
            .join(" ");
        }

        // if (data.fio) {
        //   const parts = data.fio.trim().split(/\s+/);
        //   data.lastName = parts[0] || null;
        //   data.firstName = parts[1] || null;
        //   data.patronymic = parts[2] || null;
        // }
      },
    });
  },
};
