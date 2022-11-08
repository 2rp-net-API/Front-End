import React, { Component } from "react";
import './styles.css';

const teste = () => {alert('oi')}

export default class BotaoEnviar extends Component {
    render() {
      return (
          <div>
              <button type="button" className="btn btn-outline-success rounded-5 fw-bold" onClick={teste}>Enviar</button>
            {/* <script>
              function teste(){
                 alert ("Ola")
                }
            </script> */}

          </div>
        
      );
    }
  }
