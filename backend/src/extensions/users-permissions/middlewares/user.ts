const applyTo = ["plugin::users-permissions.user"];

const addUsernameMiddleware = () => {
  return async (context, next) => {
    if (!applyTo.includes(context.uid)) {
      return next();
    }

    if (["create", "update"].includes(context.action)) {
      const { data } = context.params;

      // Если есть email, используем его как username
      if (data.email) {
        context.params.data.username = data.email;
      }

      // Если email обновляется, обновляем и username
      if (data.email && context.action === "update") {
        context.params.data.username = data.email;
      }
    }

    const result = await next();

    return result;
  };
};

export { addUsernameMiddleware };
