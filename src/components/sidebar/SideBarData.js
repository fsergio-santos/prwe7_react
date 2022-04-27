
import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
   {
      page: 'Página Principal',
      path: '/dashboard',
      icon:<FaIcons.FaHome/>,
      sub: false, 
   },
   {
       page:'Cadastros',
       path:'#',
       icon:<FaIcons.FaFile/>,
       closed:<RiIcons.RiArrowDownSFill/>,
       opened:<RiIcons.RiArrowUpSFill/>,
       sub:true,
       subMenu:[
           {
             page:'Usuário',
             path:'/usuario/listar',
             icon:<FaIcons.FaUser/>,
           },
           {
            page:'Grupo',
            path:'/grupo/listar',
            icon:<FaIcons.FaLayerGroup/>,
          }
       ]
   },
   {
        page: 'Relatórios',
        path: '/relatorio',
        icon:<IoIcons.IoIosExit/>,
        sub: false, 
    },
    {
        page: 'Manutenção',
        path: '/manutencao',
        icon:<IoIcons.IoIosExit/>,
        sub: false, 
    },

];