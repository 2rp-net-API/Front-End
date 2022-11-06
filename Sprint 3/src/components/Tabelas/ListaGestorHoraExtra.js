import React, { Component } from "react";
import BtnAtualizar from "../BotaoAtualizar/BtnAtualizar";



import "./styletable.css";


export default class ListaGestorHoraExtra extends Component {
  render() {
    return (
      <div>

        <div className="col-5 d-flex">
            <input className="form-control text-primary rounded-5 mb-5 mt-2" type="text" placeholder="Pesquisar Hora Extra"></input>
        
            <div className="">
                <button type="button" className="btn btn-outline-primary rounded-4 fw-bold ms-5 mt-2">Filtar</button>
            </div>
        </div>

        <table class="table table-bordered">

          <thead>
            <tr className="text-primary">
              <th>Data</th>
              <th>Funcionário</th>
              <th>Matrícula</th>
              <th>Horas Extras</th>
              <th>Gestor</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody class="table-group-divider ">
            <tr>
              <td>10/10/2022</td>
              <td>Maria Aparecia</td>
              <td>123</td>
              <td>2horas</td>
              <td>Eduardo</td>
              <td>Aprovado</td>
            </tr>

            <tr>
            <td>10/10/2022</td>
              <td>Joao da Silva</td>
              <td>54782</td>
              <td>01:30 horas</td>
              <td>Eduardo</td>
              <td>Aprovado</td>
            </tr>

            <tr>
            <td>10/10/2022</td>
              <td>Fernando</td>
              <td>9878</td>
              <td>5 horas</td>
              <td>Eduardo</td>
              <td>recusado</td>
            </tr>

          </tbody>
        </table>
        <div className="mt-3 mb-5 d-flex justify-content-end">
          <BtnAtualizar />
        </div>
      </div>
    );
  }
}