'use client'

import { useEffect, useState } from "react"

export default function Comment(props) {
    let [comment, setComment] = useState('')
    let [data, setData] = useState([])

    useEffect(()=>{
        fetch('/api/commentServer?id=' +  props._id)
        .then(r=>r.json())
        .then((result)=>{
            setData(result)
            console.log(data)
        })
    }, [])

    return (
        <div>
            <hr/>
            <h4>댓글목록</h4>
            {
                data.length > 0 ?
                data.map((a, i)=>{
                    return (
                        <div key={i}>
                            <p style={{borderLeft:'5px solid black', paddingLeft:'5px'}}>{a.contents} - {a.author}</p>
                        </div>
                    )
                })
                : '댓글 없음'
            }
            <hr/>
            <h4>댓글 작성란</h4>
            <input onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={()=>{
                fetch('/api/comment', {
                    method: 'POST', 
                    body: JSON.stringify({comment: comment, _id: props._id})
                })
            }}>댓글전송</button>
            <hr/>
        </div>
    )
} 