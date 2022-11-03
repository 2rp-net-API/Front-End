import "./styles.css"; 

export default function CentroResultado()
{
    
    return(
        <div className="">
            <div>
                <form className="">
                    <div>
                        <div className="row">
                            <div className="col-md-4 pesquisa-cliente ms-5">
                              <input className="form-control rounded-5 text-primary" type="text" id="" placeholder="Nome"></input>
                            </div>

                            <div className="col-md-1 status">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        <button className=" col btn">Adicionar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}