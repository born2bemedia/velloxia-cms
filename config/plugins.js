module.exports = () => ({
  "users-permissions": {
    config: {
      register: {
        // put the name of your added fields here
        allowedFields: ["firstName", "lastName", "phone"],
      },
    },
  },
  upload: {
    provider: "local",
    providerOptions: {
      sizeLimit: 1000000, // Adjust this limit if needed (in bytes)
      path: "/var/data", // Use the mount path from Render
    },
  },
});
