import React from "react";

 
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { Stack, Rating } from "@mui/material";

const ProdCard = (props) => {
  const { id, title, image, price,value } = props.item;

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
        value,
      }),
       
    );
    setOpen(true);
  };


  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }
  const action = (
    <React.Fragment>
       
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Card sx={{ maxWidth: 300 }} className="main-card">
        <CardActionArea>
          <img src={image} alt="" className="prod-img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography>Rs.{price}</Typography>
            <Stack spacing={2}>
              <Rating
                value={value}
                precision={0.5}
                readOnly
                // highlightSelectedOnly   this is used for highlighted only one
              />
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={() => addToCart()}
          >
            Add to cart
          </Button>
          <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Item Added in Cart"
        action={action}
      />
        </CardActions>
      </Card>
    </>
  );
};

export default ProdCard;
