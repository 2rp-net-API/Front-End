import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Hora_extra from "./pages/Horaextra";
import Sobreaviso from "./pages/Sobreaviso"

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";


import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className="content">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/hora_extra" element={<Hora_extra />} exact />
            <Route path="/sobreaviso" element={<Sobreaviso />} exact />
          </Routes>
        </Router>
        <Footer />
        
      </div>
    );
  }
}
