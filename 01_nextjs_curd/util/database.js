import { MongoClient } from 'mongodb'
import dotenv from "dotenv";
dotenv.config({ path: '@/.env.local' });

const url = 'mongodb+srv://admin:' + process.env.NEXT_PUBLIC_MONGODB_PW + '@cluster0.xzjgmie.mongodb.net/?retryWrites=true&w=majority'

const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
