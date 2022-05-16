
import React, { useState, Fragment } from "react";

const pageSizes = [5, 10, 15, 20];

const SelectNumberPage = ({ pageSize, setPageSize }) => {

    const [tamanhoPagina, setTamanhoPagina ] = useState(pageSize);

    const setTamanho = (e) => {
       setTamanhoPagina(e.target.value);
       setPageSize(e.target.value);
    }

    return (
        <Fragment>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group row">
                    <label className="col-form-label col-11 col-sm-1">
                        <b>Mostrar:</b>
                    </label>
                    <div className="col-8 col-xs-12 col-sm-6 col-md-6 offset-md-1 ">
                        <select className="form-control pagination"
                            value={tamanhoPagina}
                            onChange={(e) => setTamanho(e)}
                        >
                         {pageSizes.map((size) => (
                                 <option key={size} value={size}>
                                     {size}
                                 </option>
                         ))}

                        </select>
                    </div>
                </div> 
            </div>
        </Fragment>
    )

}

export default SelectNumberPage;