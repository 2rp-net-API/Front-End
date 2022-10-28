import React, { Component } from "react";
import BtnAtualizar from "../components/BotaoAtualizar/BtnAtualizar";
import BotaoEnviar from "../components/BotaoEnviar/BotaoEnviar";
import BotaoCancelar from "../components/BotaoCancelar/BotaoCancelar";
import ListaHoraExtra from "../components/Tabelas/ListaHoraExtra"
import HoraExtra from "../components/HoraExtra/";


export default class HoraExtraFuncionario extends Component {
  render() {
    return (
      <div>

        <HoraExtra />

        <div className="container text-center pt-5">

          <div className="col-md row ">
            <div id="btn-enviar" className="col-2 pb-3">
              <BotaoEnviar />
            </div>

            <div className="col-1">
              <BotaoCancelar />
            </div>
            
          </div>
          

          <div className="tabela row">
            <div className="col align-self-center">
                <ListaHoraExtra />
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