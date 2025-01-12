import mongoose from "mongoose";
import 'dotenv/config'

export async function configureDB(){
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Db connecnted...")
    } catch (error) {
        console.log(error);
    }
}