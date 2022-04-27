
import React, { Fragment, useState } from 'react'
import Header from "../header/Header";
import Sidebar from '../sidebar/SideBar';
import Content from '../content/Content';

const Layout = ({ children }) => {

    const [showMenu, setShowMenu] = useState(true);

    const setChangeStateMenu = (show) => {
       setShowMenu(show)
    }

    return (
        <Fragment>
           <header>
                <Header changeStateMenu={setChangeStateMenu}/>
           </header>
           <aside>
               <Sidebar showMenu={showMenu}/>
           </aside>
           <main>
               <Content showMenu={showMenu}>
                   { children }   
               </Content>
           </main>
        </Fragment>
    )

}


export default Layout;