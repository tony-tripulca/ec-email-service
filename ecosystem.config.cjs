module.exports = {
  apps: [
    {
      name: "CheckoutService.1.2",
      namespace: "ec-checkout-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
