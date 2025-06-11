export default ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["firstName", "lastName", "patronymic"],
      },
    },
  },
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("S3_ACCESS_KEY_ID"),
          secretAccessKey: env("S3_SECRET_ACCESS_KEY"),
        },
        region: env("S3_REGION"),
        endpoint: env("S3_ENDPOINT_URL"),
        params: {
          Bucket: env("S3_BUCKET_NAME"),
        },
      },
    },
  },
});
