export default (plugin) => {
  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/upload",
    handler: "content-api.upload",
    config: {
      policies: ["global::check-upload-owner"],
    },
  });
  return plugin;
};
