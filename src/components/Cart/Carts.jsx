import React from 'react';
import { List, Typography, IconButton, Paper } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { cartUiActions } from '../../store/cartUiSlice.jsx';

import CartItem from './CartItem';
import './shopping-cart.css';

const Carts = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
    navigate('/');

    
     
     
    

  
  };

  return (
    <div className="cart__container" style={{overflow:'hidden'}}>
      <Paper className="cart">
        <div className="cart__close">
          <IconButton onClick={toggleCart}>
            <ClearSharpIcon style={{ fontSize:"40px", color: '#0f172a' }}/>
          </IconButton>
        </div>

        <List className="cart__item-list">
          {cartProducts.length === 0 ? (
            <Typography variant="h6" align="center" mt={5}>
              No item added to the cart
            </Typography>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </List>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <Typography>
            Subtotal : <span>${totalAmount}</span>
          </Typography>
          <button>
            <Link to="/checkout" onClick={toggleCart}>
              Checkout
            </Link>
          </button>
        </div>
      </Paper>
    </div>
  );
};

export default Carts;
