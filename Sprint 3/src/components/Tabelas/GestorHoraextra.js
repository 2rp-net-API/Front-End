import React, { Component } from "react";
import BtnAtualizar from "../BotaoAtualizar/BtnAtualizar";



import "./styletable.css";


export default class TabelaGestor extends Component {
  render() {
    return (
      <div>
        <h2 className="titulo">APROVAÇÃO DAS HORAS EXTRAS</h2>


        <div className="row row-cols-2 mb-5">
          <div className="col me-5 ">
            Gestor:
          </div>
          <div className="col ms-4">
            Setor:
          </div>
        </div>



        <table class="table  table-bordered">

          <thead>
            <tr>
              <th class="col-1" >Funcionário</th>
              <th class="col-1" >Matrícula</th>
              <th class="col-1" >Entrada</th>
              <th class="col-1" >Saída</th>
              <th class="col-1" >Data</th>
              <th class="col-1" >Status</th>
            </tr>
          </thead>


          <tbody class="table-group-divider ">
            <tr>
              <td>Maria Benedita dos Santos</td>
              <td>58484161</td>
              <td>19:00</td>
              <td>21:00</td>
              <td>04/10/2022</td>
              <td class="d-flex flex-row ">
                <td class="border-0 ">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Aprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-success form-check-label " for="flexCheckDefault" id="tuple-check-lb">Aprovado</label>
                  </div>
                </td>
                <td class="border-0">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Reprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-danger form-check-label" for="flexCheckDefault" id="tuple-check-lb">Reprovado</label>
                  </div>
                </td>
              </td>
            </tr>
            <tr>
              <td>João Clementino da Fonseca</td>
              <td>98798546</td>
              <td>15:00</td>
              <td>18:00</td>
              <td>14/09/2022</td>
              <td class="d-flex flex-row">
                <td class="border-0">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Aprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-success form-check-label" for="flexCheckDefault" id="tuple-check-lb">Aprovado</label>
                  </div>
                </td>
                <td class="border-0">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Reprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-danger form-check-label" for="flexCheckDefault" id="tuple-check-lb">Reprovado</label>
                  </div>
                </td>
              </td>
            </tr>
            <tr>

              <td>Carlos Henrique de Moraes</td>
              <td>36216548</td>
              <td>07:00</td>
              <td>08:00</td>
              <td>25/09/2022</td>
              <td class="d-flex flex-row">
                <td class="border-0">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Aprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-success form-check-label" for="flexCheckDefault" id="tuple-check-lb">Aprovado</label>
                  </div>
                </td>
                <td class="border-0">
                  <div class="container mx-auto">
                    <input class="form-check-input" type="checkbox" value="Reprovado" id="flexCheckDefault tuple-check" />
                    <label class="fs-6 text-danger form-check-label" for="flexCheckDefault" id="tuple-check-lb">Reprovado</label>
                  </div>
                </td>
              </td>
            </tr>

          </tbody>
        </table>
        <BtnAtualizar />

      </div>
    );
  }
}