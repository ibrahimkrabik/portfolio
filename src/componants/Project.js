import React from "react";
import pro1 from "../photo/‏‏لقطة الشاشة (18).png";
import pro2 from "../photo/‏‏لقطة الشاشة (15).png";
import pro3 from "../photo/‏‏لقطة الشاشة (20).png";
import pro4 from "../photo/‏‏لقطة الشاشة (13).png";
import pro5 from "../photo/‏‏لقطة الشاشة (21).png";
import pro6 from "../photo/‏‏لقطة الشاشة (19).png";
import "./Project.css";

function Project() {
  return (
    <div className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <div className="row">
          <div className="col-sm-4 mb-4">
            <a href="https://ibrahimkrabik.github.io/travel/">
              <img src={pro1} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 mb-4">
            <a href="https://ibrahimkrabik.github.io/cars/">
              <img src={pro2} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 mb-4">
            <a href="https://ibrahimkrabik.github.io/golden-template/">
              <img src={pro3} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4  mb-4">
            <a href="https://ibrahimkrabik.github.io/fashion/">
              <img src={pro4} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 mb-4">
            <a href="https://ibrahimkrabik.github.io/hospital_templete/">
              <img src={pro5} alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 mb-4">
            <a href="https://ibrahimkrabik.github.io/doctor-dentiste/">
              <img src={pro6} alt="" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
