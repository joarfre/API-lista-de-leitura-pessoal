import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Jonathan:jon1020@cluster0.rtoqwnv.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection

export default db;