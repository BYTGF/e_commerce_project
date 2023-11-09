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

import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div className="app">
        <div className="row">
          <div className="col-11">
            <div className="home">
              <div className="home-text">
                <h1>Book your</h1>
                <br />
                <h1 className="home-text-2">Tour tonight</h1>
              </div>
              <div className="home-btn">
                <button> Book Tour</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div id="leftContent">
            <p>tes</p>
        </div>
        <div id="rightContent">
          <p>tes</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
