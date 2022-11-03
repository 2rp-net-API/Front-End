import React, { Component } from "react";
import BotaoCancelar from "../components/BotaoCancelar/BotaoCancelar";
import BotaoEnviar from "../components/BotaoEnviar/BotaoEnviar";
import Sobreaviso from "../components/Sobreaviso/";
import TabelaSobreaviso from "../components/Tabelas/TabelaSobreaviso";

export default class Sobreaviso_funcionario extends Component {
  render() {
    return (
        <div>
            <div>
              <Sobreaviso />
            </div>
            

            <div className="col-md row justify-content-start">
              <div id="btn-enviar" className="col-2 pt-3 ps-5 ms-5">
                <BotaoEnviar />
              </div>

              <div className="col-1 pt-3">
                <BotaoCancelar />
              </div>
          </div>

          <div className="tabela row pt-5">
            <div className="col align-self-center">
                <TabelaSobreaviso />
            </div>
          </div>
        </div>
    );
  }
}