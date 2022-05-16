import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeaders from '../../components/header/PageHeaders';
import { GradeSistema, Rodape } from '../../components/content/styled';
import { findAllEditoras, findAllEditorasByName } from '../../Service/EditoraService';
import Pagination from '../../components/table/Pagination';
import SelectNumberPage from '../../components/table/SelectNumberPages';
import SearchData from '../../components/table/SearchData';

const ListarEditora = () => {

    const [lista, setLista] = useState([]);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    const [dir, setDir] = useState('asc');
    const [props, setProps] = useState('id');
    const [nome, setNome] = useState('');
    
    useEffect( () => {
        async function loadData(){
            const data = await findAllEditoras(page, pageSize, dir, props);
            setPage(data.currentPage);
            setPageSize(data.pageSize);
            setTotal(data.lastPage);
            setLista(data.registros);
        }
        loadData();
    },[page, pageSize, dir, props]) 

    
    useEffect( () => {
      async function loadDataByName(){
          const data = await findAllEditorasByName(nome, page, pageSize, dir, props);
          setPage(data.currentPage);
          setPageSize(data.pageSize);
          setTotal(data.lastPage);
          setLista(data.registros);
      }
      loadDataByName();
  },[nome, page, pageSize, dir, props]) 

    const changePage = (selectPage) => {
        setPage(selectPage);
    }

    const changePageSize = (sizePage) => {
        setPageSize(sizePage)
    }

    const setSearchByName = ( nomePesquisa ) => {
      if (nomePesquisa.trim().length > 0 ){
        setNome(nomePesquisa)
        setProps('nome')
      } else {
        setNome(''); 
        setProps('id');
      }

    }

    return(
      <Fragment>
        <div className='container col-md-offset-4'>
          <PageHeaders 
             tituloPagina="Listagem de Editoras"
             path="/dashboard"
             tituloPesquisa="Página Principal"
             icon="list"
             toReturn="tachometer"          
          />
          <GradeSistema>

              <div className='row'> 
                <SelectNumberPage 
                    pageSize={pageSize}
                    setPageSize = {(sizePage) => changePageSize(sizePage)}/>

                <SearchData
                    setPesquisaNome={(nomePesquisa) => setSearchByName(nomePesquisa)}
                />     
              </div>
              <br/>
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
              <div class="pull-right"> 
                <Pagination 
                   page={page}
                   total={total}
                   changePages={(selectPage)=>changePage(selectPage)}/>
              </div>     
              <br/>
              <Rodape>
                <Link to={'/editora/inserir'}
                        className="btn btn-success btn-sm"
                        title='Incluir registro'
                        >Incluir Registro<i className='fa fa-plus-circle'></i> 
                </Link>
              </Rodape>

        </GradeSistema>
              
        </div>
        



      </Fragment> 
    )

}


export default ListarEditora;