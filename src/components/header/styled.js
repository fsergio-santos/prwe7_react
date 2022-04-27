
import styled from "styled-components";

export const HeaderContainer = styled.div`

    background-color: #198754;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 99;
    margin-left: ${({ sidebar }) => ( sidebar ? '250' : '0')  }
    padding-right: 15px;



`;

export const LogoSistema = styled.div`

    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    color: #fff;
    text-align: center;
    font-family: 'Niconne';
    padding: 0 15px;
    font-size: 26px;
    font-weight:400;
    line-height:50px;
    
    &focus {
        text-decoration: none;
        color:#fff;
    }


    &hover {
        text-decoration: none;
        color:#fff; 
    }


    @media( min-width: 768px){
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto; 
        display: block;
        width: 250px;
        background-color: #007d71;
    }


`;

export const Toogle = styled.div`

    padding: 0 15px;
    font-family: fontAwesome;
    color: #fff;
    line-height: 2.4;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;

    &:hover, &focus {
        color: #fff;
        background-color: #00635a;
        text-decoration: none;
    }

    &:before{
        content: "\f0c9";
        font-size: 21px;
    } 

    @media (max-width: 767px ){
        -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
    }



`;

export const Profile = styled.div`
    
   position: fixed; 
   padding-top: 13px;
   right: 0px;
   display: flex;
   font-weight: bold;
   font-size: 18px;
   
   @media( min-width: 768px ){
      -webkit-box-flex: 1;
          -ms-flex: 1 0 auto;
              flex: 1 0 auto; 
   }

`;

export const Username = styled.span`
    padding-right:13px;
`;

export const Logado = styled.span`
    padding-right:13px;
`;

export const Logout = styled.div`
    color:#212529;
    text-decoration:none; 
`;



export const AppTitle = styled.div`
    
   border-radius: 6px;
   margin-right: auto;
   margin-left:auto;
   background-color: #FFF;
   display:flex;
   margin: 0 5% 30px;
   justify-content:space-between;

   .titulo {
     font-size: 30px;
     padding-left: 15px;
     padding-right:15px; 

   }

   .pesquisa{
      font-size: 20px;
      padding-left: 10px;
      text-decoration: none;
      cursor:pointer; 
   }


`;





