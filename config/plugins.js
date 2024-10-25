module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        // put the name of your added fields here
        allowedFields: ["firstName", "lastName", "phone"],
      },
    },
  },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST", "smtp.gmail.com"),
        port: env("SMTP_PORT", 587),
        auth: {
          user: env("SMTP_USERNAME"),
          pass: env("SMTP_PASSWORD"),
        },
        secure: env("SMTP_SECURE", false),
      },
      settings: {
        defaultFrom: "noreply@velloxia.com",
        defaultReplyTo: "noreply@velloxia.com",
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
