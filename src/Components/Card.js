import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ImgMediaCard(props) {
  const handleAddItem = (item) => {
      props.addItem(item)
  }
  
  return (
    <Card sx={{
      width: 440,
      margin: "15px 5px",
      display: "flex",
      padding: "0 5px 15px 5px",
      flexDirection: "column",
      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        width="400"
        image={props.data.images[0]}
      />
      <CardContent style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {props.data.description}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          $ {props.data.price}
        </Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" startIcon={<ShoppingCartIcon />} onClick={() => handleAddItem(props.data)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}