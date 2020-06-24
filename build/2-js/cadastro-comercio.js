/* Recolher dados do formulário */

window.onload = () => {
    // Realizar cadastro
    cadastro.onsubmit = (evento) => {
        let cadastroBarLocal = {
            nome: nome.value,
            cnpj: cnpj.value,
            email: email.value,
            senha: senha.value,
            cep: cep.value,
            logradouro: logradouro.value,
            numeroLocal: numeroLocal.value,
            complemento: complemento.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
            telefone: telefone.value,
            logo: ""
        };

        localStorage.setItem('cadastroBarLocal', JSON.stringify(cadastroBarLocal));


        if(localStorage.getItem("cadastrosBares") === null) {
            let cadastrosBares = [];
            cadastrosBares.push(cadastroBarLocal);

            localStorage.setItem('cadastrosBares', JSON.stringify(cadastrosBares));

        } else {
            let cadastrosBares = [];
            cadastrosBares = localStorage.getItem("cadastrosBares");
            cadastrosBares.push(cadastroBarLocal);

            localStorage.setItem('cadastrosBares', JSON.stringify(cadastrosBares));
        }
    };

    // Coletar informações de Endereço
    cep.onchange = () => {
        function success() {
            let objEndereco = JSON.parse(this.responseText);

            if (objEndereco.erro == true) {
                alert("O CEP digitado não existe!");
                btn_submit.disabled = true;

            } else {
                btn_submit.disabled = false;
                logradouro.value = objEndereco.logradouro;
                complemento.value = objEndereco.complemento;
                bairro.value = objEndereco.bairro;
                cidade.value = objEndereco.localidade;
                estado.value = objEndereco.uf;
            };
        };

        function error(err) {
            console.log('Erro:', err);
        };

        var xhr = new XMLHttpRequest();
        xhr.onload = success;
        xhr.onerror = error;
        xhr.open('GET', `https://viacep.com.br/ws/${cep.value}/json/`);
        xhr.send();
    };

    cep.oninput = () => {
        if (cep.value.length < 9) {
            logradouro.disabled = false;
            bairro.disabled = false;
            cidade.disabled = false;
            estado.disabled = false;
        } else {
            logradouro.disabled = true;
            bairro.disabled = true;
            cidade.disabled = true;
            estado.disabled = true;
        };
    };
};



function validar() {
    var nome = cadastro.nome.value;
    if (nome == "" || nome == null) {
        alerta.innerHTML = '* Digite o nome do seu estabelecimento!';
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

    var logradouro = cadastro.logradouro.value;
    if (logradouro == "" || logradouro == null) {
        alerta.innerHTML = '* O campo de logragouro não pode ficar vazio!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.logradouro.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var numeroLocal = cadastro.numeroLocal.value;
    var numeroLocalRE = /\d+/;
    if (numeroLocal == "" || numeroLocal == null) {
        alerta.innerHTML = '* O campo de número não pode ficar vazio!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.numeroLocal.focus();
        return false;
    } else if (!numeroLocalRE.test(numeroLocal)) {
        alerta.innerHTML = '* Número inválido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.numeroLocal.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var bairro = cadastro.bairro.value;
    if (bairro == "" || bairro == null) {
        alerta.innerHTML = '* Preencha o campo Bairro!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.bairro.focus();
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

};