import React, {  } from "react";
import among from "../../imagens/among-us.png"
import { BsHouseDoorFill } from "react-icons/bs";
import "./styles.css"; 

export default function Header()
{
    return(
        <div>
            <header className="pb-2 mb-5">

                <BsHouseDoorFill color="#FFFFFF" className="icone-casa mx-2" />

                {/* ver como atualizar o nome da pagina automaticamente */}
                <label>Nome da Pagina</label> 
                <img className="float-end mx-3 mt-2" src={among}></img>
            </header>
        </div>
    )
}