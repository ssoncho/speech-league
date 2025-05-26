export default async (policyContext, config, { strapi }) => {
  // Проверяем, существует ли пользователь в контексте запроса
  if (policyContext.state.user) {
    return true;
  }

  // Если пользователь не аутентифицирован, возвращаем false
  return false;
};
