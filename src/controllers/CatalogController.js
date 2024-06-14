import Logger from "../util/logger.js";
import Validator from "../util/validator.js";

import MongodbService from "../services/MongodbService.js";

export default {
  list: (req, res) => {
    MongodbService.all("catalogs")
      .then((response) => {
        let msg = { msg: `${req.method} ${req.originalUrl} ${res.statusCode}` };
        Logger.out([JSON.stringify(msg)]);
        return res.json(response);
      })
      .catch((error) => {
        Logger.error([JSON.stringify(error)]);
        return res.status(500).json(error);
      });
  },

  /**
   * Create a document
   * @param {*} req
   * @param {*} res
   */
  create: async (req, res) => {
    let validation = Validator.check([
      Validator.required(req.body, "name"),
      Validator.required(req.body, "description"),
    ]);

    if (!validation.pass) {
      Logger.error([JSON.stringify(validation)]);
      return res.status(422).json(validation.result);
    }

    MongodbService.insert("catalogs", {
      name: req.body.name,
      description: req.body.description,
    })
      .then((response) => {
        let msg = { msg: `${req.method} ${req.originalUrl} ${res.statusCode}` };
        Logger.out([JSON.stringify(msg)]);
        return res.json(response);
      })
      .catch((error) => {
        Logger.error([JSON.stringify(error)]);
        return res.status(500).json(error);
      });
  },
  read: (req, res) => {},
  update: (req, res) => {},
  delete: (req, res) => {},
};
