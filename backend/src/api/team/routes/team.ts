export default {
  routes: [
    {
      method: "GET",
      path: "/team",
      handler: "team.getTeam",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
