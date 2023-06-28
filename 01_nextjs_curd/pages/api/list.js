import { connectDB } from "@/util/database";

export default async function Handler(req, res) {

    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray()
    res.status(200).json(result)
}