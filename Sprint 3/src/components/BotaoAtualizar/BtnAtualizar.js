import React, { Component } from "react";

import './styles.css';

export default class BtnAtualizar extends Component {
    render() {
      const handleClick = (e) => {
        e.preventDefault()
        alert("As solicitações serão enviadas para o RH. Deseja continuar?")
      }
      return (
          <div>
              <button type="button" className="btn btn-outline-primary rounded-5 fw-bold" onClick={handleClick}>Atualizar</button>
          </div>
      );
    }
  }

