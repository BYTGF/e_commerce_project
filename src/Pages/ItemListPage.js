import * as React from "react";
import Tables from "../Components/Table";
import ImgMediaCard from "../Components/Card";
import PrimarySearchAppBar from "../Components/NavBar";
import axios from 'axios';
import { Snackbar } from "@mui/material";

export default function ItemListPage({addItem}) {
  
    const [datas, setDatas] = React.useState([])
    const url = "https://dummyjson.com/products?select=title,price,description,images"
    React.useEffect(() => {
        if(datas.length <= 0){
            axios.get(url).then(res => {
                setDatas(res.data.products)
            })
        } 
    }, [])
  const [isLogin, setIsLogin] = React.useState(true);
  const handleLogin = () => {
    isLogin ? setIsLogin(false) : setIsLogin(true);
  };
  const pageTitle = "ItemListPage"
  return (
    <div>
      <div className="Container">
        <div style={{ display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            {datas.map((data) => (
                <ImgMediaCard addItem={addItem} key={data.id} data={data}></ImgMediaCard>
            ))}
        </div>
       
      </div>
    </div>
  );
}
