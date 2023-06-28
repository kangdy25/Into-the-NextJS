import { getServerSession } from "next-auth";
import { connectDB } from "/util/database.js"
import { authOptions } from "./auth/[...nextauth]";

export default async function Content(req, res) {
    let session = await getServerSession(req, res, authOptions)
    if (req.method == 'POST') {
        if (session) {
            req.body.author = session.user.email
            if (req.body.title == '') {
                return res.status(500).json('너 왜 제목 안 씀')
            }
            let client = await connectDB;
            const db = client.db('forum');
            let result = await db.collection('post').insertOne(req.body);
            res.redirect(302, '/list')
        } else {
            return res.status(500).json('로그인 안하면 글 못 씀 ㅅㄱ')
        }
    }
}