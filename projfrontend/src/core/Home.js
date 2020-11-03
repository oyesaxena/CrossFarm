import React, { useEffect, useState } from "react";
import { API } from "../backend";
import Base from "./Base";
import Menu from "./Menu";
import logo from "../images/photologo.jpg";
import "./Homemin.css";
import background from "../images/background.png";
import welcomeImage from "../images/home-welcome-image.png";
import loginWelcomeImage from "../images/home-welcome-image-cut.png";
import marriage from "../images/marriages.jpg";
import { Link } from "react-router-dom";

import Donut from "./donutChart";
import Line from "./lineChart";

export default function Home() {
  return (
    <Base className="text-dark">
      <section className="land-section">
        <div className="hero">
          <div className="hero-message">
            <h1>Welcome CrossFarm</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              minus sit eum numquam assumenda velit totam distinctio blanditiis
              ut at dicta aperiam explicabo alias molestiae quod corrupti
              exercitationem, sapiente natus.
            </p>
            <img src={welcomeImage} className="hero-welcome-image" alt="" />
            <div className="auth-button-container">
              <button className="login-button">
                <Link className="nav-link" to="/signin">
                  LOGIN
                </Link>
              </button>
              <button className="register-button">
                <Link className="nav-link" to="/signup">
                  REGISTER
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Line />
      <Donut
        data={[
          {
            label: "Give up",
            value: 25,
          },
          {
            label: "Not even tried",
            value: 20,
          },
          {
            label: "Not even assigned",
            value: 5,
          },
          {
            label: "Never give up",
            value: 50,
          },
        ]}
      />
      <Donut
        data={[
          {
            label: "Data 1",
            value: 20,
          },
          {
            label: "Data 2",
            value: 20,
          },
          {
            label: "Data 3",
            value: 10,
          },
          {
            label: "Empty Data",
            value: 50,
            isEmpty: true,
          },
        ]}
      />
    </Base>
  );
}
