import * as React from "react";
import Tables from "../Components/Table";
import ImgMediaCard from "../Components/Card";
import PrimarySearchAppBar from "../Components/NavBar";

export default function CartPage(props) {
  const pageTitle = "CartPage";

  return (
    <div >
      <div>
        <Tables itemInCart={props.itemInCart} removeFromCart={props.removeFromCart}></Tables>
      </div>
    </div>
  );
}
