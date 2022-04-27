
import React from 'react';
import { Link } from 'react-router-dom';
import { AppTitle } from './styled';

const PageHeaders = ( { tituloPagina, path, tituloPesquisa, icon, toReturn }) => {
    return (
        <AppTitle>
            <h1 style={{ paddingTop:'10px'}}>
                <i className={`fa fa-${icon}`}>{tituloPagina}</i>
            </h1>
            <ul  className='app-breadcrumb breadcrumb'>
                <li className='breadcrumb-item pesquisa'>
                    <i className={`fa fa-${toReturn}`} fa-lg></i>
                </li>
                <li className='breadcrumb-item pesquisa'>
                    <Link className="pesquisa" to={path}>{tituloPesquisa}</Link>
                </li>
            </ul>          
        </AppTitle>
    )
}


export default PageHeaders;