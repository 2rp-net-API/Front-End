import React, { Component } from "react";
import CentroResultado from "../components/CentroResultado";
import TabelaCentroResultadoCliente from "../components/Tabelas/TabelaCentroResultadoCliente";
import TabelaCentroResultado from "../components/Tabelas/TabelaCentroResultado"

export default class CentroResultados extends Component {
  render() {
    return (
      <div>

        <div className="ms-5 ps-4 mb-5">
          <CentroResultado />
        </div>

        <div className="d-flex justify-content-center">
            <div className="mt-5 col-md-10">
                <TabelaCentroResultadoCliente/>
            </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center">
            <div className="mt-5 col-md-10">
                    <TabelaCentroResultado />
            </div>
        </div>
      </div>
    );
  }
}