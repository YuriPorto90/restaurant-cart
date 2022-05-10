import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Jvps:Databaseacess@app1.59gzn.mongodb.net/test");

let db = mongoose.connection;

export default db;