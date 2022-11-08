import React, { Component } from "react";
import BtnAtualizar from "../BotaoAtualizar/BtnAtualizar";



import "./styletable.css";


export default class TabelaGestor extends Component {
  render() {
    return (
      <div>
        <table class="table  table-bordered">

          <thead>
            <tr className="text-primary">
              <th>Funcionário</th>
              <th>Matrícula</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Data</th>
              <th>Status</th>
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
        <div className="mt-3 mb-5 d-flex justify-content-end">
          <BtnAtualizar />
        </div>

      </div>
    );
  }
}