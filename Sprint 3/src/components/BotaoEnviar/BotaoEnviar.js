import React, { Component } from "react";

import './styles.css';

export default class BotaoEnviar extends Component {
    render() {
      return (
          <div>
              <button type="button" className="btn btn-outline-success rounded-5 fw-bold">Enviar</button>
          </div>
      );
    }
  }
