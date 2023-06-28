import ListItem from "./ListItem";
import { connectDB } from "/util/database.js"

export const dynamic = 'force-dynamic'

export default async function list(){

    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
    })
    // console.log(result)
    
    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
    
}