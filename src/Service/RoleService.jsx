
import http from '../config/banco';

export const findAllRoles = async (page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/roles/listar',
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


export const findAllRolesByName = async (nome, page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/role/listar/',
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

export const findRoleById = async (id) => {
    return (
        http({
            method: 'get',
            url: `/role/alterar/${id}`,
        }).then((res)=>{
            console.log(res.data)
            return res.data
        }).catch( (errors) => {
            return errors.response;
        })
    )
 
 }




export const inserirRole = async (Role) => {
   return (
       http({
           method: 'post',
           url: '/role/salvar',
           data: Role
       }).then((res)=>{
           console.log(res.data)
           return res.data
       }).catch( (errors) => {
           console.log(errors)
           return errors.response;
       })
   )

}

export const alterarRole = async (Role, id) => {
    return (
        http({
            method: 'post',
            url: `/role/alterar/${id}`,
            data: Role
        }).then((res)=>{
            console.log(res.data)
            return res.data
        }).catch( (errors) => {
            console.log(errors)
            return errors.response;
        })
    )
 
 }