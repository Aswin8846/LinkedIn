import mongoose from "mongoose"
const connectionString = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@linkedin-clone-unique123.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`

if(!connectionString) {
    throw new Error('Please the MONGODB_URI environment varaible inside .env.local');
}

const connectDB = async () => {
    if (mongoose.connection?.readyState >=1) {
        return;
    }

    try {
        console.log("___ Connecting to MongoDB ___");
        await mongoose.connect(connectionString);
    } catch(error) {
        console.log("Error connecting to MongoDB: ", error);
    }
}

export default connectDB;