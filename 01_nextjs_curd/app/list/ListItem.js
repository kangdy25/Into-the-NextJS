'use client'

import Link from 'next/link'

export default function ListItem(props) {
    return (<div>
        {
            props.result.map((a, i)=>{
                return (
                    <div className="list-item" key={i}>
                    <Link href={'/detail/' + props.result[i]._id}><h2 style={{fontSize: '20px'}}>{a.title}</h2></Link>
                    <p style={{fontSize: '15px', color: '#222'}}>{props.result[i].content}</p>
                    <Link href={'/detail/' + props.result[i]._id}><span style={{display:'block', marginTop: '20px', fontSize: '13px'}}>작성자: {a.author}</span></Link>
                    <Link href={'/edit/' + props.result[i]._id}><h5>수정하고 싶은뎅...</h5></Link>
                        <span className='delete' onClick={(e)=>{
                            // Ajax를 이용한 삭제 기능 구현
                            fetch('/api/delete', {
                                method : 'POST',
                                body: props.result[i]._id, 
                            }).then((res)=>{
                                if (res.status !== 200) {
                                    alert('너 이 글 작성자 아니잖아;;')
                                    return;
                                }
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(()=>{
                                e.target.parentElement.style.display = 'none';
                                }, 1000)
                            })
                            // Query String을 이용한 삭제 기능 구현
                            // fetch('/api/delete?_id=' + props.result[i]._id )
                        }}>
                            삭⭐제
                        </span>
                </div>)
            })
        }
    </div>)
}