
import React, { Fragment } from "react";

import { Button, Modal } from "react-bootstrap";
import { GradeSistema } from "../../components/content/styled";

import 'bootstrap/dist/css/bootstrap.min.css';

const AtribuirRoles = ({showModal, fecharModal}) => {

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
