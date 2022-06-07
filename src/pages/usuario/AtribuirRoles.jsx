
import React, { Fragment, useEffect, useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { GradeSistema } from "../../components/content/styled";
import { findAllRoles } from "../../Service/RoleService";
import 'bootstrap/dist/css/bootstrap.min.css';

const AtribuirRoles = ({ userRoles, showModal, fecharModal, onChangeRoles}) => {

    const [roles, setRoles] = useState([{}])
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [dir, setDir] = useState('asc');
    const [props, setProps] = useState('id');

    useEffect(()=>{
        const role=[]
        async function loadRoles(){
            const data_roles = await findAllRoles();
            for (let i=0; i<data_roles.registros.length; i++){
                 role.push({
                    id:data_roles.registros[i].id,
                    nome: data_roles.registros[i].nome,
                    descricao : data_roles.registros[i].descricao,
                    check:false
                })
            }  
            console.log(userRoles)
            for (let i=0; i < role.length; i++  ){
                for (let j = 0; j < userRoles.length; j++ ){
                    if (role[i].id === userRoles[j].id){
                        role[i].check=true;
                    }
                }
            }
            setRoles(role);
        
        } 
        loadRoles()
    },[page, pageSize, dir, props])

    const onChangeCheckdRoles = (e) => {

        const listaRoles = [...roles];
        const id = e.target.value;
        
        onChangeRoles(e);

        for ( let i = 0 ; i < listaRoles.length; i++){
           if (listaRoles[i].id == id ) {
               listaRoles[i].check = !listaRoles[i].check;
           } 
        }
        
        setRoles(listaRoles)
     } 

    const onClose = () => {
       fecharModal();
    }

    return(
         <Fragment> 
            <div className="container pt-5">
                <GradeSistema >
                   <Modal show={showModal}
                           size="lg" 
                           aria-labelledby="contained-modal-title-vcenter"
                           centered >
                    
                    <Modal.Header>
                        <Modal.Title>Atribuir Roles para o Usuário</Modal.Title>  
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <label className="control-label">Usuário:</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr className="p-3 mb-2 bg-primary text-white">
                                    <th>id</th>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Check</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles.map(( data ) => (
                                         <tr key={data.id}>
                                            <td>{data.id}</td>
                                            <td>{data.nome}</td>
                                            <td>{data.descricao}</td>
                                            <td><input type="checkbox"
                                                       checked={data.check} 
                                                       value={data.id}
                                                       onChange={
                                                          (e)=>onChangeCheckdRoles(e) } /></td>
                                         </tr>  
                                ))}
                                    
                            </tbody>

                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(e)=>onClose(e)}>Fechar</Button>
                    </Modal.Footer>
                  </Modal> 
                  </GradeSistema>   
                </div>
      
         </Fragment>   

    )

}


export default AtribuirRoles;
