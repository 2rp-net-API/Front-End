import React, { Component } from "react";
import BtnAtualizar from "../components/BotaoAtualizar/BtnAtualizar";
import BotaoEnviar from "../components/BotaoEnviar/BotaoEnviar";
import BotaoCancelar from "../components/BotaoCancelar/BotaoCancelar";
import TabelaHoraExtra from "../components/Tabelas/TabelaHoraExtra"
import HoraExtra from "../components/HoraExtra/";


export default class HoraExtraFuncionario extends Component {
  render() {
    return (
      <div>

        <HoraExtra />

        <div className="container text-center pt-5">

          <div className="d-md-flex justify-content-md-end border-bottom pb-4 mb-2">
            <div id="btn-enviar" className="px-5 ">
              <BotaoEnviar />
            </div>

            <div>
              <BotaoCancelar />
            </div>
            
          </div>
          

          <div className="tabela row pt-5">
            <div className="col align-self-center">
                <TabelaHoraExtra />
            </div>
          </div>


          <div className="">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pt-3">
            <BtnAtualizar/>
          </div>
        </div>

        </div>
      </div>
    );
  }
}