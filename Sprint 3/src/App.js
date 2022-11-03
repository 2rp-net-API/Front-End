import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< Updated upstream
import HoraExtra from "./pages/HoraExtra";
import Sobreaviso from "./pages/Sobreaviso";
import HoraGestor from "./pages/HrGestor";




import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


=======
import Hora_extra from "../pages/Hora_extra";
import Sobreaviso from "./pages/Sobreaviso"

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import btn_atualizar from "./components/Botao_atualizar/btn_atualizar";
>>>>>>> Stashed changes

import "./App.css";


export default class App extends Component {
  render() {
    return (
      <div className="content">
        < Header />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} exact />
<<<<<<< Updated upstream
            <Route path="/horaextra" element={<HoraExtra />} exact />
            <Route path="/sobreaviso" element={<Sobreaviso />} exact />
            <Route path="/hrgestor" element={<HoraGestor/>} exact/>
=======
            <Route path="/hora_extra" element={<Hora_extra />} exact />
            <Route path="/sobreaviso" element={<Sobreaviso />} exact />
>>>>>>> Stashed changes
          </Routes>
        </Router>
        <Hora_extra />
        <Footer />
        

      </div>
    );
  }
}
