import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HoraExtra from "./pages/HoraExtra";
import Sobreaviso from "./pages/Sobreaviso";
import HoraGestor from "./pages/HrGestor";
import CentroResultado from "./components/CentroResultado";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//import axios from 'axios'



import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className="content">
        < Header />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} exact />
            <Route path="/horaextra" element={<HoraExtra />} exact />     /**funcioario */
            <Route path="/sobreaviso" element={<Sobreaviso />} exact />   /**funcioario */
            <Route path="/hrgestor" element={<HoraGestor/>} exact/>
            <Route path="/centroresultado" element={<CentroResultado/>} exact/>
          </Routes>
        </Router>
        <Footer />

      </div>
    );
  }
}
