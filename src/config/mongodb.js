import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.sqg4ehk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const mdbClient = new MongoClient(uri);
