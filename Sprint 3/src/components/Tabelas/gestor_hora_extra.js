import React, {Component} from "react";


import "./styletable.css";


  export default class Tabelagestor extends Component {
    render() {
      return (
<div className="container"> {/* trabalhar com colunas */}
        <div className="">
            <form className="">

                <div>  {/* div engloba todo bloco */}
                    <div className="row">
                        <div className="col-md col-9">
                        <input className="form-control rounded-5 text-primary" type="text" id="" placeholder="Usuario"></input>
                        </div>
                        <div className="col-md-3">
                              <input className="form-control rounded-5 text-primary" type="number" id="" placeholder="Matricula"></input>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-md-3 mt-5">
                              <input className="form-control rounded-5 text-primary" type="date" id="" placeholder="Data"></input>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2 mt-4">
                              <input className="form-control rounded-5 text-primary" type="text" id="" placeholder ="Entrada"></input>
                        </div>
                        <div className="col-md-2 mt-4">
                              <input className="form-control rounded-5 text-primary" type="text" id="" placeholder ="Saida"></input>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <button style="font-family:verdana;" type="button" onclick="alert('As solicitações serão enviadas para o RH. Deseja continuar?')">Atualizar</button>
    </div>
    );
    }
  }