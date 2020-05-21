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
    }else{
        alerta.innerHTML = '';
    }

    var sobrenome = cadastro.sobrenome.value;
    if (sobrenome == "" || sobrenome == null) {
        alerta.innerHTML = '* Digite um Sobrenome';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.sobrenome.focus();
        return false;
    } else if (sobrenome.length < 3) {
        alerta.innerHTML = '* Digite um Sobrenome válido';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.sobrenome.focus();
        return false;
    }else{
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
    }else{
        alerta.innerHTML = '';
    }

    var confirmsenha = cadastro.confirmsenha.value;
    if (confirmsenha != senha) {
        alerta.innerHTML = '* As senhas devem ser iguais';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmsenha.focus();
        return false;
    }else{
        alerta.innerHTML = '';
    }

var email = cadastro.email.value;
if (email == "" || email == null) {
    alerta.innerHTML = '* Digite um Email';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    alerta.style.textAlign = 'left';
    cadastro.email.focus();
    return false;
} else if (email.length < 3) {
    alerta.innerHTML = '* Digite um Email válido';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    alerta.style.textAlign = 'left';
    cadastro.email.focus();
    return false;
}else{
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
}else{
    alerta.innerHTML = '';
}

var ddd = cadastro.ddd.value;
if (ddd == "" || ddd == null) {
    alerta.innerHTML = '* Digite um DDD';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    alerta.style.textAlign = 'left';
    cadastro.telefone.focus();
    return false;
} else if (telefone.value.length > 4) {
    alerta.innerHTML = '* Digite um DDD válido';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    cadastro.telefone.focus();
    return false;
}else{
    alerta.innerHTML = '';
}

var anonascimento = cadastro.anonascimento.value;
if (anonascimento == "" || anonascimento == null) {
    alerta.innerHTML = '* Digite um Ano de nascimento';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    alerta.style.textAlign = 'left';
    cadastro.telefone.focus();
    return false;
} else if (telefone.value.length != 4) {
    alerta.innerHTML = '* Digite um ano de nascimento válido';
    alerta.style.color = '#D01';
    alerta.style.display = 'block';
    cadastro.telefone.focus();
    return false;
}else{
    alerta.innerHTML = '';
};
};
>>>>>>> b80f45603b93ac3fd658fc084ac45340d222089c
