/* Recolher dados do formulário */

window.onload = () => {
    cadastro.onsubmit = (evento) => {
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('cnpj', cnpj.value);
        localStorage.setItem('telefone', telefone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('checkEmail', checkEmail.value);
        localStorage.setItem('senha', senha.value);
        localStorage.setItem('confirmesenha', confirmesenha.value);
        localStorage.setItem('cidade', cidade.value);
        localStorage.setItem('estado', estado.value);
        localStorage.setItem('cep', cep.value);
    };

    /* Função para validar se campos estão corretos */
};



function validar() {
    var nome = cadastro.nome.value;
    if (nome == "" || nome == null) {
        alerta.innerHTML = '* Digite um Nome do seu estabelecimento ';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.nome.focus();
        return false;
    } else if (nome.length < 3) {
        alerta.innerHTML = '* Digite um nome válido';
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
        alerta.innerHTML = '* Digite um Cnpj';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.cnpj.focus();
        return false;

    } else if (cnpj.length < 5) {
        alerta.innerHTML = '* Digite um Cnpj válido';
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
        alerta.innerHTML = '* Digite um Telefone';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.telefone.focus();
        return false;
    } else if (telefone.value.length <= 7) {
        alerta.innerHTML = '* Digite um telefone válido';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.telefone.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var senha = cadastro.senha.value;
    if (senha == "" || senha == null) {
        alerta.innerHTML = '* Digite uma Senha';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.senha.focus();
        return false;
    } else if (senha.length < 8) {
        alerta.innerHTML = '* A senha deve conter 8 ou mais caractéres.';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.senha.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var confirmesenha = cadastro.confirmesenha.value;
    if (confirmeS != senha) {
        alerta.innerHTML = '* As senhas devem ser iguais';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmeS.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    };
};
