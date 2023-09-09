import React from 'react';
import { Paper, Typography, IconButton, Divider, Stack } from '@mui/material';
import { IoAddCircleSharp } from 'react-icons/io5';
import { AiFillMinusCircle } from 'react-icons/ai';
// import { GiCrossMark } from 'react-icons/gi';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

import './cart-item.css';

const CartItem = ({ item }) => {
  const { id, title, price, image, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image,
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <Paper elevation={4} className="cart__item" style={{overflow:'hidden'}}>
      <div className="cart__item-info d-flex gap-2">
        <img src={image} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center  justify-content-between">
          <div>
            <Typography variant="h6" className="cart__product-title">
              {title}
            </Typography>
            <Typography className="d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${totalPrice}</span>
            </Typography>
            <Stack direction="row" spacing={1} className="increase__decrease-btn" style={{width:"110px"}}>
              <IconButton className="decrease__btn" onClick={decreaseItem}>
                <AiFillMinusCircle />
              </IconButton>
              <Typography className="quantity" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{quantity}</Typography>
              <IconButton className="increase__btn" onClick={incrementItem}>
                <IoAddCircleSharp />
              </IconButton>
            </Stack>
          </div>

          <IconButton className="delete__btn" onClick={deleteItem}>
            <CloseIcon style={{ fontSize:"30px", color: 'white' }}/>
          </IconButton>
        </div>
      </div>
      <Divider />
    </Paper>
  );
};

export default CartItem;
