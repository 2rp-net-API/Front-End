import React, { Component } from "react";
<<<<<<< Updated upstream
import BotaoCancelar from "../components/BotaoCancelar/BotaoCancelar";
import BotaoEnviar from "../components/BotaoEnviar/BotaoEnviar";
=======

>>>>>>> Stashed changes
import Sobreaviso from "../components/Sobreaviso/";

export default class Sobreaviso_funcionario extends Component {
  render() {
    return (
<<<<<<< Updated upstream
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
        </div>
=======
      <div>
        <Sobreaviso />
      </div>
>>>>>>> Stashed changes
    );
  }
}