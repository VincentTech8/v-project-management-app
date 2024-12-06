module.exports = {
  apps: [
    {
      name: "v-project-management-app",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
