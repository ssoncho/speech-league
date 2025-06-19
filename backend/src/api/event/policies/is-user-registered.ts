export default async function isUserRegistered(
  policyContext,
  config,
  { strapi }
): Promise<boolean> {
  const { state, params, response } = policyContext;
  const user = state.user;
  const eventId = params.id;

  if (!user) {
    response.unauthorized("User is not authenticated");
    return false;
  }

  const userDoc = await strapi
    .documents("plugin::users-permissions.user")
    .findOne({
      documentId: user.id.toString(),
      populate: { eventsPlannedGo: { fields: ["documentId"] } },
    });

  const list = userDoc?.eventsPlannedGo;
  const isRegistered =
    Array.isArray(list) && list.some((ev) => ev.documentId === eventId);

  if (!isRegistered) {
    response.forbidden("User is not registered for this event");
    return false;
  }

  return true;
}
