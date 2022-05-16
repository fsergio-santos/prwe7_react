import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import ListarEditora from "../pages/editora/ListarEditora";
import IncluirEditora from '../pages/editora/IncluirEditora';
import AlterarEditora from '../pages/editora/AlterarEditora';
import IncluirUsuario from '../pages/usuario/IncluirUsuario'; 


const AppRoutes = () => {

    return (
        <Layout>
           <Routes>
               <Route path="/dashboard" exact element={<Dashboard/>}/>
               <Route path="/editora/listar" exact element={<ListarEditora/>}/>
               <Route path="/editora/inserir" exact element={<IncluirEditora/>}/>
               <Route path="/editora/alterar/:id" exact element={<AlterarEditora/>}/>
               <Route path="/usuario/inserir" exact element={<IncluirUsuario/>}/>                
            </Routes>
        </Layout>
    )


}

export default AppRoutes;