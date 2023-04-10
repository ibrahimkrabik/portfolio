/* eslint-disable react-hooks/rules-of-hooks */

import TypeWriterEffect from "react-typewriter-effect";
import myphoto from "../photo/background (3).jpg";
import nav1 from "../photo/icons8-facebook-24.png";
import nav2 from "../photo/icons8-telegram-app-24.png";
import nav3 from "../photo/icons8-whatsapp-24.png";
import "./HomePort.css";

function HomePort() {
  return (
    <div className="home">
      <div className="container home">
        <div className="face">
          <img src={myphoto} alt="" />
        </div>
        <div className="text">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "sans-serif",
              color: "#fff",
              fontWeight: 900,
              fontSize: "30px",
            }}
            startDelay={1000}
            cursorColor="#d54807"
            multiText={["Hi, I am Ibrahim Karbik", " I am front-end developer"]}
            multiTextDelay={1000}
            typeSpeed={50}
          />
        </div>

        <div className="socia-media">
          <a href="#">
            <img src={nav1} alt="" />
          </a>
          <a href="#">
            <img src={nav2} alt="" />
          </a>
          <a href="#">
            <img src={nav3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePort;
