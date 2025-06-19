import path from "path";

export default {
  routes: [
    {
      method: "GET",
      path: "/events/:id/is-registered",
      handler: "event.isUserRegisteredOnEvent",
    },
    {
      method: "POST",
      path: "/events/:id/register",
      handler: "event.registerUserOnEvent",
    },
    {
      method: "DELETE",
      path: "/events/:id/unregister",
      handler: "event.unregisterUserOnEvent",
    },
    {
      method: "GET",
      path: "/events/:id/details",
      handler: "event.getEventCard",
    },
  ],
};
