import React, {Fragment, useState } from "react";

import { HeaderContainer, 
         LogoSistema, 
         Toogle, 
         Profile, 
         Logado,
         Username,
         Logout,
        } from "./styled";

const Header = ({ changeStateMenu }) =>{
    
    const [showMenu, setShowMenu] = useState(false);
    
    const showMenuBar = () => {
        console.log(showMenu);
        setShowMenu(!showMenu);
        changeStateMenu(showMenu);
    }




    return (
      <Fragment>
        <HeaderContainer sidebar={showMenu}>
            <LogoSistema>Sistema</LogoSistema>
            <Toogle onClick={()=> showMenuBar() }/>
            <Profile>
                <Logado>Nome:</Logado>
                <Username>João da Silva</Username>
                <Logout/>
            </Profile>
        </HeaderContainer>
    </Fragment>
    ) 
}

export default Header;