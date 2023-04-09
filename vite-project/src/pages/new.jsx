import React from 'react';
import './new.css'
const New = () => {
  return (
    <div className="container">

        <div className="box">
            <nav>
                <a href="#" className="logo">Bella</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="contains">

                <div className="section-1">
                    <h1>Hi, I'am Shehab</h1>
                    <h3>ReactJs Developer</h3>
                    <p>High level experience in web design and
                        development knowledge,producing quality work.</p>
                    <a className="btn" href="">Contact Me</a>
                </div>

                <div className="section-2">
                    <img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1681082511/user_aowxl1.png" alt=""/>
                </div>

                <div className="section-3">
                    <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>

            </div>
        </div>
    </div>
  );
}

export default New;
