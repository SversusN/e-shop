import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) =>{
  let summ = 0
  props.orders.forEach(el=>summ+=Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el=>(
    <Order key= {el.id} item = {el} onDelete = {props.onDelete} />
  ))}
  <p className='summ'>Сумма: {new Intl.NumberFormat().format(summ)} р</p>
  </div>)
}

const showNothing = () =>{
  return (<div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}





export default function Header(props) {
 
  let[cartOpen, setCartOpen] = useState(false);

  return (
    <header>
     <div>
        <span className='logo'>SampleEshop</span>
        <ul className = 'nav'>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={()=>setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        {cartOpen && (
          <div className='shop-cart'>
           {props.orders.length>0 ?
           showOrders(props):showNothing() }       
          </div>
        )}
     </div>
     <div className = 'presentation'></div>
    </header>
  );
}
