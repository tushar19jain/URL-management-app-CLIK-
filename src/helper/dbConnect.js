import mongoose from "mongoose";

export default async function dbConnect(){
      try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL)
    } catch (error) {
        console.log(error)
    }
}