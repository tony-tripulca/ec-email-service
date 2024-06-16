import Logger from "../util/logger.js";
import Validator from "../util/validator.js";

import { mailClient } from "../config/nodemailer.js";

export default {
  send: async (req, res) => {
    let validation = Validator.check([
      Validator.required(req.body, "recepient"),
      Validator.required(req.body, "subject"),
      Validator.required(req.body, "html"),
    ]);

    if (!validation.pass) {
      Logger.error([JSON.stringify(validation)]);
      return res.status(422).json(validation.result);
    }

    try {
      mailClient.sendMail({
        from: "tony.tripulca@gmail.com",
        to: req.body.recepient,
        subject: req.body.subject,
        html: req.body.html,
      });

      let msg = { msg: `${req.method} ${req.originalUrl} ${res.statusCode}` };
      Logger.out([JSON.stringify(msg)]);
      return res.json(msg);
    } catch (error) {
      Logger.error([JSON.stringify(error)]);
      return res.status(500).json(error);
    }
  },
};
