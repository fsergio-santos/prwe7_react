
import http from '../config/banco';

export const findAllEditoras = async (page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/editora/listar',
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


export const findAllEditorasByName = async (nome, page, pageSize, dir, props) =>{
    return (
        http({
            method:'GET',
            url:'/editora/listar/',
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

export const findEditoraById = async (id) => {
    return (
        http({
            method: 'get',
            url: `/editora/alterar/${id}`,
        }).then((res)=>{
            console.log(res.data)
            return res.data
        }).catch( (errors) => {
            return errors.response;
        })
    )
 
 }




export const inserirEditora = async (editora) => {
   return (
       http({
           method: 'post',
           url: '/editora/salvar',
           data: editora
       }).then((res)=>{
           console.log(res.data)
           return res.data
       }).catch( (errors) => {
           console.log(errors)
           return errors.response;
       })
   )

}

export const alterarEditora = async (editora, id) => {
    return (
        http({
            method: 'post',
            url: `/editora/alterar/${id}`,
            data: editora
        }).then((res)=>{
            console.log(res.data)
            return res.data
        }).catch( (errors) => {
            console.log(errors)
            return errors.response;
        })
    )
 
 }








