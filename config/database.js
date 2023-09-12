import mongoose from "mongoose";

// Connection à MongoDb
const database = async () => {
    try {
        const connect = await mongoose.connect(process.env.URI_MONGODB);
        console.log("Connecté à MongoDB " + connect);
    } catch (err) {
        console.log(err);
    }
};

export default database;
