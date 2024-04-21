import mongoose from "mongoose";


const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the MongoDB");
        return connection
    } catch (error) {
        console.log(error);
    }

}

export default connectDB