export default function List() {
    let item = ['tomato', 'pasta', 'coconut']

    return (
        <div>
            <h4 className="title">상품 목록</h4>
            {
                item.map((a, i)=>{
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{item[i]} $40</h4>
                        </div>
                    )
                })
            }
        </div>
    )
} 