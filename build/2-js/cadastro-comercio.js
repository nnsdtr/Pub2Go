/* Recolher dados do formulário */

window.onload = () => {
    cadastro.onsubmit = (evento) => {
        let cadastroBarLocal = {nome: nome.value,
                                cnpj: cnpj.value,
                                telefone: telefone.value,
                                email: email.value,
                                senha: senha.value,
                                cidade: cidade.value,
                                estado: estado.value,
                                cep: cep.value,
                                logo: logoPath.value};

        localStorage.setItem('cadastroBarLocal', JSON.stringify(cadastroBarLocal));

    };

    /* Função para validar se campos estão corretos */
};



function validar() {
    var nome = cadastro.nome.value;
    if (nome == "" || nome == null) {
        alerta.innerHTML = '* Digite um nome do seu estabelecimento!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.nome.focus();
        return false;
    } else if (nome.length < 3) {
        alerta.innerHTML = '* Digite um nome válido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.nome.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var cnpj = cadastro.cnpj.value;
    if (cnpj == "" || cnpj == null) {
        alerta.innerHTML = '* Digite um CNPJ!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.cnpj.focus();
        return false;

    } else if (cnpj.length < 5) {
        alerta.innerHTML = '* Digite um CNPJ válido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.cnpj.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }
    var telefone = cadastro.telefone.value;
    if (telefone == "" || telefone == null) {
        alerta.innerHTML = '* Digite um telefone!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.telefone.focus();
        return false;

    } else if (telefone.length <= 7) {
        alerta.innerHTML = '* Digite um telefone válido';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.telefone.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }


    var email = cadastro.email.value;
    if (email == "" || email == null) {
        alerta.innerHTML = '* Digite um e-mail!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.email.focus();
        return false;
    } else if (email.length < 8 || email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alerta.innerHTML = '* Digite um e-mail válido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.email.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var confirmemail = cadastro.confirmemail.value;
    if (email != confirmemail) {
        alerta.innerHTML = '* Os e-mails devem ser iguais!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmemail.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var senha = cadastro.senha.value;
    if (senha == "" || senha == null) {
        alerta.innerHTML = '* Digite uma senha!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.senha.focus();
        return false;
    } else if (senha.length < 8) {
        alerta.innerHTML = '* A senha deve conter 8 ou mais caractéres!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.senha.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var confirmesenha = cadastro.confirmesenha.value;
    if (confirmesenha != senha) {
        alerta.innerHTML = '* As senhas devem ser iguais!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmesenha.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var cidade = cadastro.cidade.value;
    if (cidade == "" || cidade == null) {
        alerta.innerHTML = '* Preencha o campo Cidade!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.cidade.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var estado = cadastro.estado.value;
    if (estado == "" || estado == null || estado == "Estado") {
        alerta.innerHTML = '* Preencha o campo Estado!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.estado.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var cep = cadastro.cep.value;
    if (cep == "" || cep == null) {
        alerta.innerHTML = '* O campo CEP não pode ficar vazio!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.cep.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

};