import React from "react";
import "./worxmart.css";
import MenuIcon from "@mui/icons-material/Menu";

const Worxmart = () => {
  return (
    <div className="whole">
      <div className="container1">
        <nav>
          <ul>
            <li>
              <button className="myButton login">Login</button>
            </li>
            <li>
              <button className="myButton">Register</button>
            </li>
            <li>
            <button className="btnMob">Start</button>

            </li>
          </ul>
        </nav>
      </div>
      <div className="between">
        <p> Explore Services </p>
        <p>Explore Requeists</p>
        <p>How it works</p>{" "}
      </div>

      <div className="logo">
        <img
          width="200px"
          height="100px"
          src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1676312330/shehab/SL-111719-25140-24-removebg-preview_chrjqn.png"
          alt=""
        />
      </div>
      <MenuIcon
        className="menuBurger"
        sx={{
          fontSize: "40px",
          top: "30px",
          position: "fixed",
          ml: 2,
          display: {md:"none", xs:"block"},
          cursor:"pointer"
        }}
      />

      <div className="mainContent">


<h1>Hire a professional Talent <br/>
   to get your job done</h1>
<p>Find top talens, fast and easy. Connect with the <br/>
  best freelancers and bring your projects to life.</p>

  <div className="maingImg">

<img width="400px"  src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681082511/user_aowxl1.png" alt="" />
</div>

      </div>

      <div className="bar">
<img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/nsnlogo-1_ias9r0.png" alt="" />
<img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/MZsolutionlogo-1_kpifty.png" alt="" />
<img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/Fut-trans-logo-1_zfb1zx.png" alt="" />
<img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/WhatsApp-Image-2023-02-06-at-1.04-1-1_bujhil.png" alt="" />

      </div>

    </div>


  );
};

export default Worxmart;
