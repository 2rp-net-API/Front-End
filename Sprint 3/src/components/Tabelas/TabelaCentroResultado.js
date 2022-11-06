import React, {  } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import "./styletable.css"; 

export default function TabelaCentroResultado()
{
    return(
        <div>
            <table className="table">
                <thead>
                    <tr className="ColunaAzul">
                        <th></th>
                        <th>Nome</th>
                        <th>Cliente</th>
                        <th>Status </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>Giovana</td>
                        <td>xxxx</td>
                        <td>Indefinido</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>Moises</td>
                        <td>xxxxx</td>
                        <td>Ok</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td>< BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                    <tr>
                        <td><input class="form-check-input" type="checkbox"></input></td>
                        <td>UM</td>
                        <td>dois</td>
                        <td>tres</td>
                        <td><BsFillTrashFill color="#F15555" className="mx-5" />< BsFillPencilFill color="#1079F7"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}