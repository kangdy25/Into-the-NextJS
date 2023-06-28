import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function Handler(req, res) {
    // Ajax를 이용한 삭제 기능 구현
    console.log(req.body)
    if (req.method == 'POST') {
        let session = await getServerSession(req, res, authOptions)
        console.log(session.user.email)
        let client = await connectDB;
        const db = client.db('forum');
        if (session) {
            let result = await db.collection('post').findOne({_id: new ObjectId(req.body)}); 
            console.log(result.author)
            if (result.author === session.user.email) {
                let deleteResult = await db.collection('post').deleteOne({_id: new ObjectId(req.body)}); 
                res.redirect(302, '/list')
            } else {
                res.status(500).json('현재 유저와 작성자 불일치')
            }
        } else {
            res.end()
        }
    }
    // Query String을 이용한 삭제 기능 구현
    // if (req.method == 'GET') {
    //     console.log(req.query)
    //     let client = await connectDB;
    //     const db = client.db('forum');
    //     let result = await db.collection('post').deleteOne({_id: new ObjectId(req.query._id)}); 
        
    //     res.redirect(302, '/list')
    // }
}