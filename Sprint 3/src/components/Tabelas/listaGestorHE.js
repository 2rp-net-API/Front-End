import React, {Component} from "react";


import "./styletable.css";


export default class ListaGestor extends Component {
    render() {
      return (
<div>
    <table id="customers">
            <thead>
            <tr>
                <th>Data</th>
                <th style={width = 40}> Funcionário</th>
                <th>Matrícula</th>
                <th>Hora Extra</th>
                <th>Gestor</th>
                <th>Status</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>04/10/2022</td>
                <td>Maria Benedita dos Santos</td>
                <td>58484161</td>
                <td>2 horas</td>
                <td>Nelson Garcia</td>
                <td>Aprovado</td>
            </tr>
            <tr>
                <td>14/09/2022</td>
                <td>João Clementino da Fonseca</td>
                <td>98798546</td>
                <td>3 horas</td>
                <td>Nelson Garcia</td>
                <td>Aprovado</td>
            </tr>
            <tr>
                <td>25/09/2022</td>
                <td>Carlos Henrique de Moraes</td>
                <td>36216548</td>
                <td>1 hora</td>
                <td>Willian Cardoso</td>
                <td>Aprovado</td>
            </tr>
        </tbody>
    </table>
</div>
      );
    }
}


