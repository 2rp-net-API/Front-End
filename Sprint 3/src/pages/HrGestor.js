import React, { Component } from "react";
import BtnAtualizar from "../components/BotaoAtualizar/BtnAtualizar";
import Header from "../components/Header/Header";
import TabelaGestor from "../components/Tabelas/TabelaGestor";



export default class HrGestor extends Component
{
    render() {
        return (
          <div>    
          <BtnAtualizar/>
          <TabelaGestor/> /**TA DEVOLVENDO UM FORMULARIO EM VEZ DE UMA TABELA */
        </div>
        );
      }

}