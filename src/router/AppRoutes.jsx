import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import ListarEditora from "../pages/editora/ListarEditora";
import IncluirEditora from '../pages/editora/IncluirEditora';
import AlterarEditora from '../pages/editora/AlterarEditora';

const AppRoutes = () => {

    return (
        <Layout>
           <Routes>
               <Route path="/dashboard" exact component={<Dashboard/>}/>
               <Route path="/editora/listar" exact component={<ListarEditora/>}/>
               <Route path="/editora/inserir" exact component={<IncluirEditora/>}/>
               <Route path="/editora/alterar/:id" exact component={<AlterarEditora/>}/>
             
            </Routes>
        </Layout>
    )


}

export default AppRoutes;