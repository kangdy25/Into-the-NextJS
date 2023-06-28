import { connectDB } from "/util/database.js"
import { ObjectId } from "mongodb";

export default async function EditContent(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)
            if (req.body.title == '' || req.body.content == '') {
                return res.status(500).json('너 왜 제목이나 내용 안씀;;;')
            }
            // console.log(req.body);
            let change = {title: req.body.title, content: req.body.content}
            let client = await connectDB;
            const db = client.db('forum');
            let result = await db.collection('post').updateOne({_id: new ObjectId(req.body._id)}, { $set : change } ); 
            return res.redirect(302, '/list')
        
    }
}