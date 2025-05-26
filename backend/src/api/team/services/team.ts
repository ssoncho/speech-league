/**
 * team service
 */

const teamService = {
  async getTeamMembers() {
    const members = await strapi
      .documents("plugin::users-permissions.user")
      .findMany({
        populate: {
          role: {
            fields: ["name"],
          },
          projects: {
            fields: ["name"],
          },
          communities: {
            fields: ["name"],
          },
        },
        filters: {
          role: {
            name: {
              $in: ["leader", "curator", "trainer"],
            },
          },
          isPublic: "true",
        },
        sort: {
          role: {
            level: "desc",
          },
        },
      });
    return members;
  },
};

export default teamService;
