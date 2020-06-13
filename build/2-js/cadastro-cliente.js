/* Recolher dados do formulário */

window.onload = () => {
    cadastro.onsubmit = (evento) => {
        let cadastroClienteLocal = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            senha: senha.value,
            email: email.value,
            telefone: telefone.value,
            anonascimento: anonascimento.value,
            cep: cep.value,
            logradouro: logradouro.value,
            numeroLocal: numeroLocal.value,
            complemento: complemento.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
            avatar: "/build/0-imgs/usuarios/perfil/placeholder.png"
        }

        localStorage.setItem('cadastroClienteLocal', JSON.stringify(cadastroClienteLocal));

        let preferenciasClienteLocal = {
            categorias: {
                boate: false,
                buteco: false,
                churrascaria: false,
                restaurante: false,
                burgueria: false
            },

            culinarias: {
                brasileira: false,
                italiana: false,
                alema: false,
                japonesa: false,
                pizza: false
            }
        }

        localStorage.setItem('preferenciasClienteLocal', JSON.stringify(preferenciasClienteLocal));
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


};


function validar() {
    var nome = cadastro.nome.value;
    if (nome == "" || nome == null) {
        alerta.innerHTML = '* Digite um nome!';
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

    var sobrenome = cadastro.sobrenome.value;
    if (sobrenome == "" || sobrenome == null) {
        alerta.innerHTML = '* Digite um sobrenome!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.sobrenome.focus();
        return false;
    } else if (sobrenome.length < 3) {
        alerta.innerHTML = '* Digite um sobrenome válido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.sobrenome.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var senha = cadastro.senha.value;
    if (senha == "" || senha == null) {
        alerta.innerHTML = '* Digite uma senha';
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
    if (confirmesenha == "" || senha == null) {
        alerta.innerHTML = '* Confirme sua senha!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.senha.focus();
        return false;
    } else if (confirmesenha != senha) {
        alerta.innerHTML = '* As senhas devem ser iguais';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmesenha.focus();
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
    if (confirmemail == "" || confirmemail == null) {
        alerta.innerHTML = '* Confirme seu e-mail!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmemail.focus();
        return false;
    } else if (email != confirmemail) {
        alerta.innerHTML = '* Os e-mails devem ser iguais!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.confirmemail.focus();
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
    } else if (telefone.length < 15) {
        alerta.innerHTML = '* Digite um telefone válido!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.telefone.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

    var anonascimento = cadastro.anonascimento.value;
    if (anonascimento == "" || anonascimento == null) {
        alerta.innerHTML = '* Informe a sua data de nascimento!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.anonascimento.focus();
        return false;
    } else if (anonascimento.length < 10) {
        alerta.innerHTML = '* Data de nascimento inválida!';
        alerta.style.color = '#D01';
        alerta.style.display = 'block';
        alerta.style.textAlign = 'left';
        cadastro.anonascimento.focus();
        return false;
    } else {
        alerta.innerHTML = '';
    }

};