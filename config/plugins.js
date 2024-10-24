module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        // put the name of your added fields here
        allowedFields: ["firstName", "lastName", "phone"],
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
