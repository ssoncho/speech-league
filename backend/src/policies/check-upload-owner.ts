export default async function checkUploadOwner(
  { state, request, response },
  config: unknown,
  { strapi }
): Promise<boolean> {
  const user = state.user;
  if (!user) return response.unauthorized();

  const { ref, refId } = request.body;
  if (
    ref !== "plugin::users-permissions.user" ||
    refId !== user.id.toString()
  ) {
    return response.forbidden("Cannot upload photo for another user");
  }

  return true;
}
