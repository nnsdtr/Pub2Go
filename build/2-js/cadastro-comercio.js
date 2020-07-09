/* Implementação do banco de dados comercio */

// Objeto para o banco de dados de usuários baseado em JSON
var db_comercios = {};



/* Recolher dados do formulário */

window.onload = () => {
    // Inicializar Database
    var db_bares_JSON = localStorage.getItem('db_bares');

    if(db_bares_JSON) { // Somente roda se db existir no localStorage
        var db_bares = JSON.parse(db_bares_JSON);
    } else {
        var db_bares = {"data": []};
        localStorage.setItem('db_bares', JSON.stringify(db_bares))
    };

    // Validar formulário
    btn_submit.disabled = true;
    cadastro.oninput = () => { // A cada input o formulário é validado
        validar();

        if($("#cadastro")[0].checkValidity()) { // Checa validade do formulário e libera o botão submit se verdadeiro
            btn_submit.disabled = false;
        } else {
            btn_submit.disabled = true;
        };
    };

    // Realizar cadastro
    $("#btn_submit").click( function () {
        let novoId = db_bares.data.length;
        let novoBar = {
            "id": novoId,
            "email": email.value,
            "nome": nome.value,
            "cnpj": cnpj.value,
            "senha": senha.value,
            "cep": cep.value,
            "logradouro": logradouro.value,
            "numeroLocal": numeroLocal.value,
            "complemento": complemento.value,
            "bairro": bairro.value,
            "cidade": cidade.value,
            "estado": estado.value,
            "telefone": telefone.value,
            "logo": "",
            "caracteristicas": {
                "tipoDoBar": {
                    "boate": false,
                    "buteco": false,
                    "churrascaria": false,
                    "restaurante": false,
                    "burgueria": false
                },
                "culinarias": {
                    "brasileira": false,
                    "italiana": false,
                    "alema": false,
                    "japonesa": false,
                    "pizza": false
                }
            }
        };
        
        db_bares.data.push(novoBar);
        localStorage.setItem('db_bares', JSON.stringify(db_bares));
        alert("Cadastro inserido com sucesso");
    });

    cadastro.onsubmit = (evento) => {
        evento.preventDefault();
        window.location = "login-comercio.html";
    };
    

    // Coletar informações de Endereço
    cep.onchange = () => {
        function success() {
            let objEndereco = JSON.parse(this.responseText);

            if (objEndereco.erro == true) {
                alert("O CEP digitado não existe!");

            } else {
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
    cadastro.nome.onchange = () => {
        var checarNome = cadastro.nome.value;
        if (checarNome == "" || checarNome == null) {
            alerta.innerHTML = '* Digite o nome do seu estabelecimento!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.nome.focus();
            return false;
        } else if (checarNome.length < 3) {
            alerta.innerHTML = '* Digite um nome válido!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.nome.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.cnpj.onchange = () => {
        var checarCNPJ = cadastro.cnpj.value;
        if (checarCNPJ == "" || checarCNPJ == null) {
            alerta.innerHTML = '* Digite um CNPJ!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.cnpj.focus();
            return false;
        } else if (checarCNPJ.length < 18) {
            alerta.innerHTML = '* Digite um CNPJ válido!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.cnpj.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.email.onchange = () => {
        var checarEmail = cadastro.email.value;
        if (checarEmail == "" || checarEmail == null) {
            alerta.innerHTML = '* Digite um e-mail!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.email.focus();
            return false;
        } else if (checarEmail.length < 8 || checarEmail.indexOf('@') == -1 || checarEmail.indexOf('.') == -1) {
            alerta.innerHTML = '* Digite um e-mail válido!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.email.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.confirmemail.onchange = () => {
        var checarEmail = cadastro.email.value;
        var checarConfirmemail = cadastro.confirmemail.value;
        if (checarEmail != checarConfirmemail) {
            alerta.innerHTML = '* Os e-mails devem ser iguais!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.confirmemail.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.senha.onchange = () => {
        var checarSenha = cadastro.senha.value;
        if (checarSenha == "" || checarSenha == null) {
            alerta.innerHTML = '* Digite uma senha!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.senha.focus();
            return false;
        } else if (checarSenha.length < 8) {
            alerta.innerHTML = '* A senha deve conter 8 ou mais caractéres!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.senha.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.confirmesenha.onchange = () => {
        var checarSenha = cadastro.senha.value;
        var checarConfirmesenha = cadastro.confirmesenha.value;
        if (checarSenha != checarConfirmesenha) {
            alerta.innerHTML = '* As senhas devem ser iguais!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.confirmesenha.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.cep.oninput = () => {
        var checarCEP = cadastro.cep.value;
        if (checarCEP == "" || checarCEP == null) {
            alerta.innerHTML = '* O campo CEP não pode ficar vazio!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.cep.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };

        if (checarCEP.length < 9) {
            logradouro.disabled = false;
            bairro.disabled = false;
            cidade.disabled = false;
            estado.disabled = false;

            logradouro.value = "";
            bairro.value = "";
            cidade.value = "";
            estado.value = "";
        } else {
            logradouro.disabled = true;
            bairro.disabled = true;
            cidade.disabled = true;
            estado.disabled = true;
        };
    };


    cadastro.logradouro.onchange = () => {
        var checarLogradouro = cadastro.logradouro.value;
        if (checarLogradouro == "" || checarLogradouro == null) {
            alerta.innerHTML = '* O campo de logragouro não pode ficar vazio!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.logradouro.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.numeroLocal.onchange = () => {
        var checarNumeroLocal = cadastro.numeroLocal.value;
        var numeroLocalRE = /\d+/;
        if (checarNumeroLocal == "" || checarNumeroLocal == null) {
            alerta.innerHTML = '* O campo de número não pode ficar vazio!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.numeroLocal.focus();
            return false;
        } else if (!numeroLocalRE.test(checarNumeroLocal)) {
            alerta.innerHTML = '* Número inválido!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.numeroLocal.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.bairro.onchange = () => {
        var checarBairro = cadastro.bairro.value;
        if (checarBairro == "" || checarBairro == null) {
            alerta.innerHTML = '* Preencha o campo Bairro!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.bairro.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.cidade.onchange = () => {
        var checarCidade = cadastro.cidade.value;
        if (checarCidade == "" || checarCidade == null) {
            alerta.innerHTML = '* Preencha o campo Cidade!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.cidade.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.estado.onchange = () => {
        var checarEstado = cadastro.estado.value;
        if (checarEstado == "" || checarEstado == null || checarEstado == "Estado") {
            alerta.innerHTML = '* Preencha o campo Estado!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.estado.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };


    cadastro.telefone.onchange = () => {
        var checarTelefone = cadastro.telefone.value;
        if (checarTelefone == "" || checarTelefone == null) {
            alerta.innerHTML = '* Digite um telefone!';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.telefone.focus();
            return false;
        } else if (checarTelefone.length <= 7) {
            alerta.innerHTML = '* Digite um telefone válido';
            alerta.style.color = '#ff8080';
            alerta.style.display = 'block';
            alerta.style.textAlign = 'left';
            cadastro.telefone.focus();
            return false;
        } else {
            alerta.innerHTML = '';
        };
    };
};