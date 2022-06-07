
import http from '../config/banco';

export const findAllUsuarios = async (page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/usuario/listar',
            params:{
                page,
                pageSize,
                dir,
                props
            }
        }).then( ( resp ) =>{
            return resp.data
        }).catch(( error ) => {
            return error.response
        }) 
    )
}


export const findAllUsuariosByName = async (nome, page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/usuario/listar/',
            params:{
                page,
                pageSize,
                dir,
                props,
                nome
            }
        }).then( ( resp ) =>{
            return resp.data
        }).catch(( error ) => {
            return error.response
        }) 
    )
}

export const findUsuarioById = async (id) => {
    return (
        http({
            method: 'get',
            url: `/usuario/alterar/${id}`,
        }).then((res)=>{
            return res.data
        }).catch( (errors) => {
            return errors.response;
        })
    )
 
 }




export const inserirUsuario = async (usuario) => {
   console.log(usuario)
   return (
       http({
           method: 'post',
           url: '/usuario/salvar',
           data: usuario
    
          }).then((res)=>{
              console.log(res.data)
           return res.data
       }).catch( (errors) => {
           return errors.response;
       })
   )

}

export const alterarUsuario = async (usuario, id) => {
    return (
        http({
            method: 'post',
            url: `/usuario/alterar/${id}`,
            data: usuario
        }).then((res)=>{
            console.log(res.data)
            return res.data
        }).catch( (errors) => {
            console.log(errors)
            return errors.response;
        })
    )
 
 }