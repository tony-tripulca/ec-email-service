module.exports = {
  apps: [
    {
      name: "ClassService.1.3",
      namespace: "skhillz-class-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
