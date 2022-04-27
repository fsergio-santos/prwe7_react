import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeaders from '../../components/header/PageHeaders';
import { GradeSistema, Rodape } from '../../components/content/styled'
import { Link } from 'react-router-dom';
import { INICIAR_EDITORA } from './Editora';
import { alterarEditora, findEditoraById } from '../../Service/EditoraService';

const AlterarEditora = (  ) => {
    
    const { id } = useParams();

    const [editora, setEditora] = useState(INICIAR_EDITORA);
    

    useEffect(()=>{
        async function loadEditora(){
            const data = await findEditoraById(id)
            setEditora(data.registro)
        } 
        loadEditora();
    },[id]) 



    const onSubmitEditora = (e) => {
        e.preventDefault();
        alterarEditora(editora, id);
        setEditora(INICIAR_EDITORA);
    }

    const onChangeEditora =( e ) => {
        const { name, value } = e.target;
        setEditora({ ...editora, [name]:value})
    }



    return (
        <Fragment>
            <div className='container'>
             <PageHeaders 
                tituloPagina="Alterar Registro Editora"
                path="/dashboard"
                tituloPesquisa="Página Principal"
                icon="building"
                toReturn="tachometer"          
            />
      
            <GradeSistema>
                <div className="row col-8 mx-auto">
                    <form onSubmit={(e)=>onSubmitEditora(e)}>
                       <div className='row'>
                           <div className='col-xs-12 col-sm-12 col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Nome:</label> 
                                    <input type='text' 
                                           name='nome'
                                           value={editora.nome}
                                           onChange={(e)=> onChangeEditora(e) }
                                           className='form-control'/>   
                                </div>   
                           </div>
                       </div>
                       <div className='row'>
                           <div className='col-xs-12 col-sm-12 col-md-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Data:</label> 
                                    <input type='date' 
                                           name='data_cadastro'
                                           value={editora.data_cadastro}
                                           onChange={(e)=> onChangeEditora(e) }
                                           className='form-control'/>   
                                </div>   
                           </div>

                       </div>
                       <Rodape>
                            <button type='submit'
                                    className='btn btn-success btn-lg'
                                    title='Salvar registro' >
                                    Salvar    
                           </button>
                           <Link to='/editora/listar'
                                 className='btn btn-secondary btn-lg'
                                 title='Cancelar a inclusão do registro'>
                                 Cancelar     
                           </Link>


                       </Rodape>

                    </form>
                </div>



            </GradeSistema>

            </div>


        </Fragment>
    )
}


export default AlterarEditora;