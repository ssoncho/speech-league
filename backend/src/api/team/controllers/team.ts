/**
 * A set of functions called "actions" for `team`
 */

import teamService from "../services/team";

export default {
  getTeam: async (ctx, next) => {
    try {
      const members = await teamService.getTeamMembers();
      const filteredMembers = members.map((member) => {
        const {
          firstName,
          lastName,
          aboutMe,
          fbUrl,
          showFb,
          tgUrl,
          showTg,
          vkUrl,
          showVk,
          role,
          projects,
          communities,
          photo,
        } = member;

        const result: Record<string, any> = {
          photo,
          firstName,
          lastName,
          aboutMe,
          statuses: [],
        };

        if (showFb && fbUrl) {
          result.fbUrl = fbUrl;
        }

        if (showTg && tgUrl) {
          result.tgUrl = tgUrl;
        }

        if (showVk && vkUrl) {
          result.vkUrl = vkUrl;
        }

        if (projects) {
          projects.forEach((project) => {
            result.statuses.push(`Лидер ${project.name}`);
          });
        }
        if (communities) {
          communities.forEach((community) => {
            result.statuses.push(`Куратор ${community.name}`);
          });
        }
        if (role.name == "trainer") {
          result.statuses.push("Тренер");
        }

        return result;
      });

      ctx.body = filteredMembers;
    } catch (err) {
      ctx.body = err;
    }
  },
};
