export default {
  routes: [
    {
      method: "GET",
      path: "/profile",
      handler: "profile.getFullInfo",
    },
    {
      method: "PUT",
      path: "/profile",
      handler: "profile.updateInfo",
    },
  ],
};
