import React, { Fragment } from "react";
//import MyRoutes from './router/MyRoutes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import ListarEditora from "./pages/editora/ListarEditora";
import IncluirEditora from "./pages/editora/IncluirEditora";
import AlterarEditora from "./pages/editora/AlterarEditora";
import IncluirUsuario from './pages/usuario/IncluirUsuario'; 
import GlobalStyles from "./globalstyles/GlobalStyles";


function App() {
  return (
    <Fragment>
      <GlobalStyles/>
      <BrowserRouter>
         <Layout>
          <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/editora/listar" element={<ListarEditora/>}/>
              <Route path="/editora/inserir" exact element={<IncluirEditora/>}/>
              <Route path="/editora/alterar/:id" exact element={<AlterarEditora/>}/>
              <Route path="/usuario/inserir" exact element={<IncluirUsuario/>}/> 
          </Routes>
         </Layout>
      </BrowserRouter>     

    </Fragment>
  );
}

export default App;
