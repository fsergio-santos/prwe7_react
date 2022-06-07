import React, { Fragment, useState } from "react";
import { INIT_USUARIO, validarDadosUsuario } from "./Usuario";
import PageHeaders from '../../components/header/PageHeaders';
import { GradeSistema, Rodape } from "../../components/content/styled";
import { Link } from 'react-router-dom';
import AtribuirRoles from "./AtribuirRoles";
import MensagemErro from "../../components/mensagens/MensagemErro";
import { inserirUsuario } from "../../Service/UsuarioService";



const IncluirUsuario = () => {

    const [usuario, setUsuario] = useState(INIT_USUARIO);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    

    // useEffect(()=>{
    //     if (Object.keys(errors).length === 0){
    //         setSubmitting(true) 
    //     }
    // },[errors])

    

    const onChangeUsuario = (e) => {
        const { name, value } = e.target
        setUsuario( { ...usuario, [name]: value } )

    }

    const cadastrarRoles = (e) => {
        e.preventDefault();
        setShowModal(!showModal)
    } 

    const fecharModal = () =>{
        setShowModal(!showModal)
    }

    const onChangeRoles = (e) => {
     
        const id = e.target.value;
        let index = 0;
        for (let i = 0; i < usuario.roles.length; i++ ){
            if (usuario.roles[i].id === id ){
                usuario.roles.splice(i,1)
                index=1;
            }
        }
        if (index === 0 ){
            usuario.roles.push({id:id})
        }
        console.log(usuario.roles);
    }

    const salvarUsuario = async (e) => {
        e.preventDefault();
        let state = validarDadosUsuario(usuario)
        if (state.validarForm){
            setErrors(state.errors);
        }
        if (state.validarForm===false){
            await inserirUsuario(usuario);
        }
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
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label fontSize">Nome:</label>
                                    <input type='text'
                                           name='name'
                                           value={usuario.name} 
                                           onChange={(e)=>onChangeUsuario(e)}
                                           className={
                                               errors.nome_valid 
                                                  ? "form-control is-invalid"
                                                  : "form-control"
                                           }
                                    />
                                    <MensagemErro 
                                       error={errors.nome_valid}
                                       mensagem={errors.nome_mensagem}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label fontSize">Email:</label>
                                    <input type='text'
                                           name='email'
                                           value={usuario.email}
                                           onChange={(e)=>onChangeUsuario(e)} 
                                           className={
                                            errors.email_valid 
                                               ? "form-control is-invalid"
                                               : "form-control"
                                        }
                                    />
                                    <MensagemErro 
                                       error={errors.email_valid}
                                       mensagem={errors.email_mensagem}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label fontSize">Email de Verificação:</label>
                                    <input type='text'
                                           name='email_verified_at'
                                           value={usuario.email_verified_at}
                                           onChange={(e)=>onChangeUsuario(e)} 
                                           className={
                                            errors.email_verified_at 
                                               ? "form-control is-invalid"
                                               : "form-control"
                                        }
                                    />
                                    <MensagemErro 
                                       error={errors.email_verified_at}
                                       mensagem={errors.email_verified_at_mensagem}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-xs-12 col-sm-12 col-md-12">
                                <div className="form-group">
                                    <label className="control-label fontSize">Roles:</label>
                                    <button className="btn btn-warning offset-md-1"
                                       onClick={(e) => cadastrarRoles(e) }>
                                       Adicionar Roles
                                    </button> 
                                </div>
                            </div>
                        </div>
                        <Rodape>
                            <button className='btn btn-success btn-lg'
                                    title='Salvar registro' onClick={(e)=>salvarUsuario(e)} >
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
                            userRoles={usuario.roles} 
                            showModal={showModal} 
                            fecharModal={()=>fecharModal()}
                            onChangeRoles={onChangeRoles}/> : null}



        </Fragment>
    )


}


export default IncluirUsuario;