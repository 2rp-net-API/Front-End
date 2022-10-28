import React, { Component } from "react";
import BtnAtualizar from "../components/BotaoAtualizar/BtnAtualizar";
import TabelaGestor from "../components/Tabelas/TabelaGestor";



export default class HrGestor extends Component
{
    render() {
        return (
          <div>     
           <BtnAtualizar/>
           <TabelaGestor/>
        </div>
        );
      }

}