import { getServerSession } from "next-auth/next";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "next-auth/next";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    console.log(req.body)
    if (req.method === 'POST') {
        req.body = JSON.parse(req.body) 
        let content = {
            contents: req.body.comment,
            author: session.user.email,
            parent: new ObjectId(req._id),
        }
        let client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('comment').insertOne(content);
        res.status(200).json('댓글 작성 완료');
    }
}