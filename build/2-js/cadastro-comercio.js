/* Recolher dados do formulário */

window.onload = () => {
    cadastro.onsubmit = (evento) => {
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('cnpj', cnpj.value);
        localStorage.setItem('telefone', telefone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('checkEmail', checkEmail.value);
        localStorage.setItem('senha', senha.value);
        localStorage.setItem('confirmeS', confirmeS.value);
        localStorage.setItem('cidade', cidade.value);
        localStorage.setItem('estado', estado.value);
        localStorage.setItem('cep', cep.value);
    }

    /* Função para validar se campos estão corretos */
};
