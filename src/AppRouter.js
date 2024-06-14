import express from "express";

import { app } from "./Server.js";

import Controller from "./controllers/Controller.js";
import CheckoutController from "./controllers/CheckoutController.js";

const store = express.Router();

/**
 * Store routes
 */
app.use("/store", store);
store.get("/orders", CheckoutController.list);
store.post("/orders", CheckoutController.create);
store.get("/orders/:order_uid", CheckoutController.read);
store.put("/orders/:order_uid", CheckoutController.update);
store.delete("/orders/:order_uid", CheckoutController.delete);
store.post("/orders/purchase", CheckoutController.purchase);

/**
 * Base routes
 */
app.get("/", Controller.base);
