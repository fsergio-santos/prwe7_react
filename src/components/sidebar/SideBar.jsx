import React, { Fragment } from 'react';
import { SideBarNav, SideBarWrap } from './styled';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';


const Sidebar = (props) => {
    return (
        <Fragment>
           <SideBarNav sidebar={props.showMenu}>
               <SideBarWrap>
                    {
                        SideBarData.map((item,index)=>{
                           return(
                            <SubMenu 
                                page={item.page}
                                path={item.path}
                                icon={item.icon}
                                opened={item.opened}
                                closed={item.closed}
                                subMenu={item.subMenu}
                                sub={item.sub}
                                key={index}
                            />
                           )
                        })    
                    }    
               </SideBarWrap>
           </SideBarNav>
        </Fragment>    
    )
}


export default Sidebar;