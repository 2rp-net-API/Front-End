import React, {  } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";


export default function TabelaCentroResultadoCliente()
{
    return(
        <div>
            <table className="table">
                <thead>
                    <tr className="ColunaAzul">
                        <th></th>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Contato </th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>Moises</td>
                        <td>102548775</td>
                        <td>12 90000-0000</td>
                        <td>OK?</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>quatro</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>quatro</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>quatro</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>quatro</td>
                        <td><BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}