'use client'

import { useState } from "react"

export default function List() {
    let item = ['tomato', 'pasta', 'coconut']
    let [count, setCount] = useState([0, 0, 0]);
    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                item.map((a, i)=>{
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{item[i]} $40</h4>
                            <span> {count[i]} </span>
                            <button onClick={()=>{
                                let copyCount = [...count]
                                copyCount[i]++
                                setCount(copyCount)
                            }}>+</button>
                            <span> </span>
                            <button onClick={()=>{
                                let copyCount = [...count]
                                copyCount[i]--
                                setCount(copyCount)
                            }}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
} 