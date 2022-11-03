import React, {  } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";


export default function TabelaSobreaviso()
{
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Data</th>
                        <th>Funcionario</th>
                        <th>Matrícula </th>
                        <th>Entrada</th>
                        <th>Saída</th>
                        <th>Gestor</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>10/10/2022</td>
                        <td>Ana Maria Braga</td>
                        <td>123</td>
                        <td>09:00</td>
                        <td>22:40</td>
                        <td>Loro José</td>
                        <td>Aceito</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>11/10/2022</td>
                        <td>Peter Pan</td>
                        <td>154</td>
                        <td>10:00</td>
                        <td>11:40</td>
                        <td>Capitao Gancho</td>
                        <td>Recusado</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>04/05/1997</td>
                        <td>Luke Skywalker</td>
                        <td>255</td>
                        <td>06:00</td>
                        <td>15:00</td>
                        <td>Obi-Wan Kenobi</td>
                        <td>Em análise</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>11/01/1985</td>
                        <td>Queen</td>
                        <td>21</td>
                        <td>20:00</td>
                        <td>00:00</td>
                        <td>Rock in Rio</td>
                        <td>Aceito</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td>x</td>
                        <td><BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}