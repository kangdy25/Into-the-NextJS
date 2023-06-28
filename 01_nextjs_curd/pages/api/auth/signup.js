import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {

    if (req.method == 'POST') {
        console.log(req.body);
        let db = (await connectDB).db('forum');
        if (!req.body.name || !req.body.email || !req.body.password) {
            return res.status(400).json({ error: '모든 필드를 입력해주세요.' });
        }
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        let existingUser = await db.collection('user_cred').findOne({email : req.body.email})
        console.log(existingUser) 
        if (existingUser) {
            return res.status(400).json({ error: '이미 사용 중인 이메일입니다.'});
        }
        await db.collection('user_cred').insertOne(req.body);
        res.status(200).json('가입 완료')
    }
}