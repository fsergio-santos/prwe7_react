export const INIT_USUARIO = {
    id: '',
    name: '',
    email: '',
    email_verified_at: '',
    roles: [],
    foto: '',
    contentType: ''
};


export function validarDadosUsuario(usuario) {
    
    let validarForm = false;

    let errors = {
        nome_mensagem: [],
        nome_valid: false,
        email_mensagem: [],
        email_valid: false,
        email_verified_at_mensagem:[],
        email_verified_at_valid:false
    }

    if (usuario.name.trim().length === 0) {
        errors.nome_mensagem.push('É obrigatório informar um nome válido');
        errors.nome_valid = true;
        validarForm = true;
    }

    if (usuario.email.trim().length === 0) {
        errors.email_mensagem.push('É obrigatório informar um endereço de e-mail');
        errors.email_valid = true
        validarForm = true;
    }

    if (usuario.email_verified_at.trim().length === 0) {
        errors.email_verified_at_mensagem.push('É obrigatório informar um endereço de e-mail');
        errors.email_verified_at_valid = true
        validarForm = true;
    }

    let state = {
        errors,
        validarForm
    }

    return state;
}