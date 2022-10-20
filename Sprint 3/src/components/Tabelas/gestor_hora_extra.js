import React, {Component} from "react";


import "./styletable.css";


export default class Tabelagestor extends Component {
    render() {
      return (
<div>
          <h2 className="titulo">APROVAÇÃO DAS HORAS EXTRAS</h2>
          <h3>Gestor:</h3><h3>Setor:</h3>
<table id="customers">
          <thead>
        <tr>
            <th className="titulo-funcionario-1">Funcionário</th>
            <th className="titulo-funcionario">Matrícula</th>
            <th className="titulo-funcionario">Entrada</th>
            <th className="titulo-funcionario">Saída</th>
            <th className="titulo-funcionario">Data</th>
            <th className="titulo-funcionario">Status</th>
        </tr>
          </thead>
          <tbody>
        <tr>
        
            <td>Maria Benedita dos Santos</td>
            <td>58484161</td>
            <td>19:00</td>
            <td>21:00</td>
            <td>04/10/2022</td>
            <td><form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Aprovado" />
                <label for="vehicle1"> Aprovado</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Reprovado" />
                <label for="vehicle2"> Reprovado</label>
                </form>
            </td>
        </tr>
        <tr>
            <td>João Clementino da Fonseca</td>
            <td>98798546</td>
            <td>15:00</td>
            <td>18:00</td>
            <td>14/09/2022</td>
            <td>
              <form>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Aprovado" />
                <label for="vehicle1"> Aprovado</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Reprovado" />
                <label for="vehicle2"> Reprovado</label>
              </form>
            </td>
        </tr>
        <tr>
            <td>Carlos Henrique de Moraes</td>
            <td>36216548</td>
            <td>07:00</td>
            <td>08:00</td>
            <td>25/09/2022</td>
            <td><form/>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Aprovado" />
                <label for="vehicle1"> Aprovado</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Reprovado" />
                <label for="vehicle2"> Reprovado</label>
                
            </td>
        </tr>
          </tbody>
</table>

    <button style="font-family:verdana;" type="button" onclick="alert('As solicitações serão enviadas para o RH. Deseja continuar?')">Atualizar</button>
</div>
      );
    }
  }