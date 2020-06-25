function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};

function validateForm() {
    if( !validateEmail(email.value) || senha.value.length == 0 ) {
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

    email.oninput = () => {
        validateForm();

        if( !validateEmail(email.value) ) {
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

        if( senha.value.length > 0 ) {
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

    loginForm.onsubmit = () => {
        let usuarioCorrente = {email: email.value, senha: senha.value};
        localStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    };


    usuarioCorrenteJSON = localStorage.getItem('usuarioCorrente');
    if(usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
        email.value = usuarioCorrente.email;
    };
};



