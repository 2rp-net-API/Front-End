import React, { Component, useReducer } from "react";
import BotaoEnviar from "../BotaoEnviar/BotaoEnviar";


import "./styles.css";


const isGestor = false
export default class Hora_extra_funcionario extends Component {

    // const [gestor, setGestor] = useState(false)

    render() {
        return (
            <div className="container"> {/* trabalhar com colunas */}
                <div className="">
                    <form className="">

                        <div>  {/* div engloba todo bloco */}
                            <div className="row">
                                <div className="col-md col-9">
                                    <input className="form-control rounded-5 text-primary" type="text" id="NomeFuncionario" placeholder="Usuario" script=""></input>
                                </div>
                                <div className="col-md-3" script="">
                                    <input className="form-control rounded-5 text-primary" type="number" id="MatriculaFuncionario" placeholder="Matricula"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3 mt-5">
                                    <input className="form-control rounded-5 text-primary" type="date" id="Data" placeholder="Data"></input>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-2 mt-4">
                                    <input className="form-control rounded-5 text-primary" type="text" id="EntradaFuncionarioHoraExtra" placeholder="Entrada ex: 06:30"></input>
                                </div>
                                <div className="col-md-2 mt-4">
                                    <input className="form-control rounded-5 text-primary" type="text" id="SaidaFuncionarioHoraExtra" placeholder="Saida ex: 18:00"></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {isGestor ? <div> </div> : null}  {/*Aqui vai o codigo da pagina do Gestor dentro das DIV.  */}

                <script>
                    const nomeUsuario = document.getElementById(NomeFuncionario);
                    const nomeUsuario = document.getElementById(MateriaFuncionario);
                    const nomeUsuario = document.getElementById(Data);
                    const nomeUsuario = document.getElementById(EntradaFuncionarioHoraExtra);
                    const nomeUsuario = document.getElementById(SaidaFuncionarioHoraExtra);
                </script>
            </div>
        )
    }
}

//Pra mostrar duas pages 1 do gestor e outra funcionario, crio tudo na mesma DIV ( pq so pode retornar um elemento HTML ),
// dentro da div cria-se variavel para poder dividir e escolher quem vai ser mostrado. Usando IF's.



// add o BotaoEnviar, e cria logica para ele pegar os id desta pagina
// crio o evento nessa page e chamo o botao que tem o evento do mesmo nome 