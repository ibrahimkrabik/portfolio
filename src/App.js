import React, { Component } from "react";
import NavBar from "./componants/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePort from "./componants/HomePort";
import Skill from "./componants/Skill";
import Project from "./componants/Project";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <Routes>
          <Route path="/home" element={<HomePort />} />

          <Route path="skills" element={<Skill />} />
          <Route path="projects" element={<Project />} />
        </Routes>
      </div>
    );
  }
}
export default App;
