module.exports = {
  apps: [
    {
      name: "EmailService.1.3",
      namespace: "ec-email-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
