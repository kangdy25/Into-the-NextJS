import {age, name} from './data.js'
import Hello from './hello.js'

export default function Cart() {
    let basket = ['Tomatoes', 'Pasta']
    let content = ['현대', '롯데', '농협']
    let color = ['red', 'blue']
    return (
        <div>
            <Hello/>
            <h4 className="title">Cart</h4>
            <CartItem basket={basket[0]}/>
            <CartItem basket={basket[1]}/>
            <Banner content={content[2]}/>
            <Button color={color[1]}/>
        </div>
    )
} 

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>{props.basket} {age}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

function Banner(props) {
    return <h5>{props.content}카드 결제 행사 중</h5>
}

function Button(props) {
    return <button style={{background: props.color}}>앙!!</button>
}