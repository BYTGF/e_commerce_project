// import * as React from 'react';
// import Tables from '../Components/Table';
// import ImgMediaCard from '../Components/Card';
// import ResponsiveAppBar from '../Components/NavBar';
// import '../App.css';

// export default function LandingPage() {

// return (
//     <div>
//       <div className="container">
//         <p>ini landing page</p>
//       </div>

//     </div>
//   );
// }

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";

const LandingPage = (props) => {
  const handlePageChange = () => {
    props.changePage("Products");
  };

  return (
    <div>
      <div className="app">
        <div className="row">
          <div className="col-11">
            <div className="home">
              <div className="home-text">
                <br />
                <h1 className="home-text-2">Badan Usaha Milik Nainggolan</h1>
              </div>
              <div className="home-btn">
                <button onClick={() => handlePageChange()}>
                  Poya-Poya dulu ga sih
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="leftContent">
          <Card>
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.pexels.com/photos/14168781/pexels-photo-14168781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product
              </Typography>
              <Typography variant="body6" color="text.secondary">
                Introducing the iPhone Pro
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" style={{ marginLeft: "330px" }}>
                Learn More
              </Button>
              <Typography variant="body6" color="text.secondary"></Typography>
            </CardActions>
          </Card>
        </div>
        <div id="rightContent">
          <Card>
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Product"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Product
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Unleash your creativity and productivity with the MacBook Pro
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" style={{ marginLeft: "330px" }}>
                Learn More
              </Button>
              <Typography variant="body6" color="text.secondary"></Typography>
            </CardActions>
          </Card>
        </div>
      </div>
      <div>
        <br/>
      </div>
    </div>
  );
};

export default LandingPage;
