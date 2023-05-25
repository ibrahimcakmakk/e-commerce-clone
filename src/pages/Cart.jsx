import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {carts,totalAmount,itemCount} = useSelector(state => state.carts);

    console.log(carts,totalAmount,itemCount , "cartss");

    useEffect(()=>{
        dispatch(getCartTotal())
    },[dispatch])
  return (
    <div>
      {
        
      }
    </div>
  )
}

export default Cart