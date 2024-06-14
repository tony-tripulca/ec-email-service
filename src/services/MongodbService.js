import moment from "moment";
import { mdbClient } from "../config/mongodb.js";
import { ObjectId } from "mongodb";

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

  /**
   * Get seletected document
   * @param {*} table
   * @param {*} uid
   * @returns
   */
  get: async (table, uid) => {
    const collection = database.collection(table);
    return await collection.findOne({ _id: new ObjectId(uid) });
  },

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

  /**
   * Update selected document
   * @param {*} table
   * @param {*} uid
   * @param {*} data
   * @returns
   */
  update: async (table, uid, data) => {
    let date = moment();
    data.updated_at = date.format("YYYY-MM-DD HH:mm:ss");
    data.updated_at_unix = date.unix();

    const filter = { _id: new ObjectId(uid) };
    const options = { upsert: true };
    const updateDoc = {
      $set: data,
    };

    const collection = database.collection(table);
    return await collection.updateOne(filter, updateDoc, options);
  },
};
