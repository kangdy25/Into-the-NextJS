import { getServerSession } from "next-auth";
import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "next-auth";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions)
    console.log(req.body)
    console.log(`세션 정보: ${session.user.email}`)
    if (req.method === 'POST') {
        if (session) {
            req.body = JSON.parse(req.body) 
            let content = {
                contents: req.body.comment,
                author: session.user.email,
                parent: new ObjectId(req.body._id),
            }
            let client = await connectDB;
            const db = client.db('forum');
            let result = await db.collection('comment').insertOne(content);
            res.status(200).json('댓글 작성 완료');
        } else {
            return res.status(500).json('로그인 안하면 댓글 못 씀 ㅅㄱ')
        }
    }
}