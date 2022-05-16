import React, { Fragment, useState } from "react";
import { INIT_USUARIO } from "./Usuario";
import PageHeaders from '../../components/header/PageHeaders';
import { GradeSistema, Rodape } from "../../components/content/styled";
import { Link } from 'react-router-dom';
import AtribuirRoles from "./AtribuirRoles";

const IncluirUsuario = () => {

    const [usuario, setUsuario] = useState(INIT_USUARIO);
    const [showModal, setShowModal] = useState(false);
   
    const cadastrarRoles = (e) => {
        e.preventDefault();
        setShowModal(!showModal)
    } 

    const fecharModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <Fragment>
           <div className='container'>
             <PageHeaders 
                tituloPagina="Incluir Registro Usuário"
                path="/dashboard"
                tituloPesquisa="Página Principal"
                icon=""
                toReturn="tachometer"          
            />
     

            <GradeSistema>
                <div className="row">
                
                    <div className="col-sm-4">
                         <div className="row">

                         </div>
                    </div>
                    <div className="col-sm-8">
                    <form>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Nome:</label>
                                    <input type='text'
                                           name='name'
                                           value={usuario.name} 
                                           className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Email:</label>
                                    <input type='text'
                                           name='email'
                                           value={usuario.email} 
                                           className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Email de Verificação:</label>
                                    <input type='text'
                                           name='email_verified_at'
                                           value={usuario.email_verified_at} 
                                           className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label">Roles:</label>
                                    <button className="btn btn-warning offset-md-1"
                                       onClick={(e) => cadastrarRoles(e) }>
                                       Adicionar Roles
                                    </button> 
                                </div>
                            </div>
                        </div>
                        <Rodape>
                            <button type='submit'
                                    className='btn btn-success btn-lg'
                                    title='Salvar registro' >
                                    Salvar    
                           </button>
                           <Link to='/usuario/listar'
                                 className='btn btn-secondary btn-lg'
                                 title='Cancelar a inclusão do registro'>
                                 Cancelar     
                           </Link>
                       </Rodape>
                       </form>  
                    </div>
                
                </div>
                
   

                </GradeSistema>
                
           </div>
           { showModal ? <AtribuirRoles 
                                 showModal={showModal} 
                                 fecharModal={()=>fecharModal()}/> : null  }



        </Fragment>
    )


}


export default IncluirUsuario;