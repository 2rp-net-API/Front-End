import React, { Component } from "react";

import Horaextra from "../components/Hora_extra/index";
import Tabelagestor from "../components/Tabelas/Tabela_gestor_HE";



export default class Hora_extra_funcionario extends Component {
  render() {
    return (
      <div>
        <Horaextra />
        <Tabelagestor/>
      </div>
    );
  }
}