var usuarioCorrente = {};

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

function validateForm() {
    if (!validateEmail(email.value) || senha.value.length == 0) {
        btnSubmit.disabled = true;
        btnSubmit.style.background = '#d4cec6';
        btnSubmit.style.color = '#9b9797';
        btnSubmit.style.border = '2px solid #d4cec6';
        btnSubmit.style.fontWeight = 'normal';
    } else {
        btnSubmit.disabled = false;
        btnSubmit.style.background = '';
        btnSubmit.style.color = '';
        btnSubmit.style.border = '';
        btnSubmit.style.fontWeight = '';
    };
};

window.onload = () => {
    /* Recolher dados do localStorage para uma variavel*/
    var db_comercios = JSON.parse(localStorage.getItem('db_bares'))



    email.oninput = () => {
        validateForm();

        if (!validateEmail(email.value)) {
            instrucaoEmail.innerHTML = '* Verifique a digitação do email';
            instrucaoEmail.style.color = '#D01';
            instrucaoEmail.style.display = 'block';
            instrucaoEmail.style.textAlign = 'left';
            email.style.background = '#fcfaf9';

        } else {
            instrucaoEmail.innerHTML = '';
            email.style.background = 'white';
        };
    };

    senha.oninput = () => {
        validateForm();

        if (senha.value.length > 0) {
            instrucaoSenha.innerHTML = '';
            senha.style.background = 'white';
        } else {
            instrucaoSenha.innerHTML = '* Este campo deve ser preenchido';
            instrucaoSenha.style.color = '#D01';
            instrucaoSenha.style.display = 'block';
            instrucaoSenha.style.textAlign = 'left';
            senha.style.background = '#fcfaf9';
        };
    };

    /*Verifica dados no "DB" */
    loginForm.onsubmit = (evento) => {
        evento.preventDefault();
        let emailUser = email.value;
        let senhaUser = senha.value;
        for (i = 0; i < db_comercios.data.length; i++) {
            var usuario = db_comercios.data[i];
            if (emailUser == usuario.email && senhaUser == usuario.senha) {
                usuarioCorrente = usuario;
                sessionStorage.setItem('estabelecimentoCorrente', JSON.stringify(usuarioCorrente));
                window.location.href = "perfil-comercio.html"
                return true;
            }
        }
        instrucaoSenha.innerHTML = '* Email ou senha incorretos';
        instrucaoSenha.style.color = '#D01';
        instrucaoSenha.style.display = 'block';
        instrucaoSenha.style.textAlign = 'left';
        senha.style.background = '#fcfaf9';
        return false;
    };
};