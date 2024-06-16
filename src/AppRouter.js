import express from "express";

import { app } from "./Server.js";

import Controller from "./controllers/Controller.js";
import EmailController from "./controllers/EmailController.js";

const store = express.Router();

/**
 * Store routes
 */
app.use("/store", store);
store.post("/send-email", EmailController.send);

/**
 * Base routes
 */
app.get("/", Controller.base);
