
import React, { useState } from "react";

const SearchData = ({ setPesquisaNome }) => {

    const [nome, setNome] = useState("");

    const onChangeNome =( e )=> {
         setNome(e.target.value);
         setPesquisaNome(e.target.value)
    }

    return (
        <div className="col-xs-12 col-sm-6 col-md-6">
            <form>
                <div className="row">
                    <label className="col-form-label col-11 col-sm-1">
                        <b>Nome:</b>
                    </label>
                    <div className="col-9 col-xs-12 col-sm-6 col-md-6 offset-md-1 ">
                        <input 
                            type="text"
                            name="nome"
                            value={nome}
                            className="form-control"
                            placeholder="Digite um nome para pesquisa"
                            onChange={(e) => onChangeNome(e)}
                        />
                    </div>
                </div>
            </form>



        </div>
    )
}


export default SearchData;