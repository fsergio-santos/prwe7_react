
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';


export const SideBarNav = styled.aside`

background: #15171c;
width: 250px;
display: flex;
justify-content: center;
position: fixed;
padding-top: 50px;
overflow: auto;
top: 0;
bottom: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10; 

@media(max-width:768px){
  left: ${({ sidebar }) => (sidebar ? '-100%' : '0')};

}

`;



export const SideBarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px; 

  &:hover {
    background: #252831;
    border-left: 3px solid #632ce4;
    cursor: pointer;
  }
`
export const SideBarLabel = styled.span`
  margin-left: 16px;
  
`;

export const DropdownLink = styled(Link)`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  
  &:hover {
    background: green;
    cursor: pointer;
  }

`;

export const SideBarWrap = styled.div`
  width: 100%;
`;