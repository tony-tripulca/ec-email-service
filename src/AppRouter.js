import express from "express";

import { app } from "./Server.js";

import Controller from "./controllers/Controller.js";
import CatalogController from "./controllers/CatalogController.js";

const store = express.Router();

/**
 * Store routes
 */
app.use("/store", store);
store.get("/catalogs", CatalogController.list);
store.post("/catalogs", CatalogController.create);
store.get("/catalogs/:catalog_uid", CatalogController.read);
store.put("/catalogs/:catalog_uid", CatalogController.update);
store.delete("/catalogs/:catalog_uid", CatalogController.delete);

/**
 * Base routes
 */
app.get("/", Controller.base);
