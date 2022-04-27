import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeaders from '../../components/header/PageHeaders';
import { GradeSistema } from '../../components/content/styled';
import { findAllEditoras } from '../../Service/EditoraService';

const ListarEditora = () => {

    const [lista, setLista] = useState([]);
    
    useEffect( () => {
        async function loadData(){
            const data = await findAllEditoras();
            setLista(data.dados);
        }
        loadData();
    },[]) 

    return(
      <Fragment>
        <div className='container'>
          <PageHeaders 
             tituloPagina="Listagem de Editoras"
             path="/dashboard"
             tituloPesquisa="Página Principal"
             icon="list"
             toReturn="tachometer"          
          />
          <GradeSistema>

              <table className="table table-striped table-bordered table-hover">
                  <thead>
                     <tr>
                       <th>Id</th> 
                       <th>Nome</th> 
                       <th>Ações</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                         lista && lista.map( ( editora ) => (
                             <tr key={editora.id}>
                                 <td>{editora.id}</td>
                                 <td>{editora.nome}</td>
                                 <td>
                                    <Link to={`/editora/alterar/${editora.id}`}
                                       className="btn btn-info btn-sm"
                                       title='Alterar registro selecionado'
                                    ><i className='fa fa-pencil'></i> 
                                    </Link>
                                    <Link to={`/editora/excluir/${editora.id}`}
                                       className="btn btn-danger btn-sm"
                                       title='Excluir registro selecionado'
                                    ><i className='fa fa-trash'></i> 
                                    </Link>   
                                 </td>

                             </tr>
                         )) 
                     }
                  </tbody>

              </table>
              <Link to={'/editora/inserir'}
                    className="btn btn-success btn-sm"
                    title='Incluir registro'
                    >Incluir Registro<i className='fa fa-plus-circle'></i> 
              </Link>

        </GradeSistema>
              
        </div>
        



      </Fragment> 
    )

}


export default ListarEditora;