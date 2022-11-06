import "./styles.css";
import { BsPlusCircle } from "react-icons/bs";


export default function CentroResultadoCliente()
{
    
    return(
        <div className="">
            <div>
                <form className="">
                    <div>
                        <div className="row">
                            <div className="col-md-4 pesquisa-cliente ms-5">
                              <input className="form-control rounded-5 text-primary" type="text" id="" placeholder="Cliente"></input>
                            </div>

                            <div className="col-md-1 status">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="botaoAtualizar d-flex bg-transparent justify-content-center">
                                <button className="botaoatualizar bg-transparent" ><BsPlusCircle color="var(--primary)"  className="bg-transparent" /></button>
                             </div> 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}