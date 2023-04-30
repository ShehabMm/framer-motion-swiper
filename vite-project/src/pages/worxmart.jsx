import React, { useEffect, useState } from "react";

import "./worxmart.css";
import MenuIcon from "@mui/icons-material/Menu";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import CreateElement from "./createElement";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Worxmart = () => {
  const navigate = useNavigate()
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [list, setlist] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api").then((res) => {
      res.data;
      console.log(res.data);
      setlist(res.data);
    });
  }, []);


  const remove = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      console.log(res.data)
      setlist([res.data]);
navigate("/Worxmart")
    })
  }

  return (
    <>
      <div className="body">
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
              display: { md: "none", xs: "block" },
              cursor: "pointer",
            }}
          />

          <div className="mainContent">
            <h1>
              Hire a professional Talent <br />
              to get your job done
            </h1>
            <p>
              Find top talens, fast and easy. Connect with the <br />
              best freelancers and bring your projects to life.
            </p>

            <FormControl
              className="select"
              sx={{ backgroundColor: "white", border: "2px solid yellow" }}
            >
              <InputLabel id="demo-simple-select-label">Age</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <Button>search</Button>
            </FormControl>

            <div className="maingImg">
              <img
                width="400px"
                src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681082511/user_aowxl1.png"
                alt=""
              />
            </div>
          </div>

          <div className="bar">
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/nsnlogo-1_ias9r0.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/MZsolutionlogo-1_kpifty.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/Fut-trans-logo-1_zfb1zx.png"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681154825/WhatsApp-Image-2023-02-06-at-1.04-1-1_bujhil.png"
              alt=""
            />
          </div>

          <div className="footer">
            <p>
              + 16,000 <br /> Registered talents
            </p>

            <p>
              Up to 50% <br /> Cost saving
            </p>

            <p>
              + 200 <br /> Categories
            </p>
          </div>
        </div>
        <div className="newSection">
          <div className="anotherSection">
            {list.map((item, i) => {
              return (
                <div className="box" key={i}>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <button onClick={() => {

                    remove(item._id)
console.log(item)
                  }} className="remove">Remove</button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
      <div className="last">
        <CreateElement />

      </div>

    </>

  );
};

export default Worxmart;
