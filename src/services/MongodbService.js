import moment from "moment";
import { mdbClient } from "../config/mongodb.js";

const database = mdbClient.db("e_commerce");

export default {
  /**
   * Get all documents
   * @param {*} table
   * @returns
   */
  all: async (table) => {
    const collection = database.collection(table);
    const cursor = collection.find({ active: { $eq: true } });

    let results = [];

    for await (let doc of cursor) {
      results.push(doc);
    }

    return results;
  },

  select: (table, queries = []) => {},
  get: (table, uid) => {},

  /**
   * Insert document to MongoDB
   * @param {*} table
   * @param {*} data
   * @returns
   */
  insert: async (table, data) => {
    let date = moment();
    data.created_at = date.format("YYYY-MM-DD HH:mm:ss");
    data.created_at_unix = date.unix();
    data.updated_at = date.format("YYYY-MM-DD HH:mm:ss");
    data.updated_at_unix = date.unix();
    data.active = true;

    const collection = database.collection(table);
    return await collection.insertOne(data);
  },
  update: (table, uid, data) => {},
};
