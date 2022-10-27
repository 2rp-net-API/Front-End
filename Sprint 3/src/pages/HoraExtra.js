import React, { Component } from "react";
import BtnAtualizar from "../components/BotaoAtualizar/BtnAtualizar";

import HoraExtra from "../components/HoraExtra/";

export default class HoraExtraFuncionario extends Component {
  render() {
    return (
      <div>
        <HoraExtra />
        <BtnAtualizar/>
      </div>
    );
  }
}