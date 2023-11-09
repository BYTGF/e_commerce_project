import * as React from 'react';
import Tables from '../Components/Table';
import ImgMediaCard from '../Components/Card';
import ResponsiveAppBar from '../Components/NavBar';
import '../App.css';
import LandingPage from './LandingPage';
import ItemListPage from './ItemListPage';
import CartPage from './CartPage';

export default function HomePage( {isLoggedIn} ) {
  const [isPage, setIsPage ] = React.useState("Home")
  const [cartItems, setCartItems] = React.useState([])
  
  
  const changePage = (newPage) => {
    setIsPage(newPage);
  }

  const addItems = (item) => {
    setCartItems([...cartItems, item])
  }

  const removeItems = (item) => {
    const updatedCartItems = cartItems.filter((cartItem, i) => i !== item);
    setCartItems(updatedCartItems);
  }

  const showPage = (pageTitle) => {
    if(isPage === "Home"){
      return <LandingPage ></LandingPage>
    }else if (isPage === "Products") {
      return <ItemListPage addItem={addItems}/>
    } else if (isPage === "CartPage") {
      return <CartPage itemInCart={cartItems} removeFromCart={removeItems} />
    }
  }
return (
    <div> 
      <ResponsiveAppBar itemInCart={cartItems} changePage={changePage} isLoggedIn={isLoggedIn}></ResponsiveAppBar>
      <div  className={isPage !== "Home" ? "container": null}>
        {showPage()}
      </div>
      
    </div>
  );
}