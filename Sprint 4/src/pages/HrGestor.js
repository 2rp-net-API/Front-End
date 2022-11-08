import React, { Component } from "react";
import TabelaGestor from "../components/Tabelas/GestorHoraextra";
import ListaGestorHoraExtra from "../components/Tabelas/ListaGestorHoraExtra"




export default class HoraGestor extends Component {
  render() {
    return (
      <div>
        {/* <HoraExtra /> */} 
        <TabelaGestor />
        <ListaGestorHoraExtra />

      </div>
    );
  }
}