import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';


const MyRoutes = () => {
    return (
        <BrowserRouter>
           <AppRoutes/>
        </BrowserRouter>
    )

}

export default MyRoutes;