import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HoraExtra from "./pages/HoraExtra";
import Sobreaviso from "./pages/Sobreaviso";
import HoraGestor from "./pages/HrGestor";

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
            <Route path="/horaextra" element={<HoraExtra />} exact />
            <Route path="/sobreaviso" element={<Sobreaviso />} exact />
            <Route path="/hrgestor" element={<HoraGestor/>} exact/>
          </Routes>
        </Router>
        <Footer />
        
      </div>
    );
  }
}
