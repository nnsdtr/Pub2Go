/* Recolher dados do formulário */

window.onload = () => {
    cadastro.onsubmit = (evento) => {
        localStorage.setItem('inputName', nome.value);
        localStorage.setItem('inputLastname', sobrenome.value);
        localStorage.setItem('inputTelefone', telefone.value);
        localStorage.setItem('inputEmail', email.value);
        localStorage.setItem('inputCheckEmail', checkemail.value);
        localStorage.setItem('inputPassword', password.value);
        localStorage.setItem('confirmPassword', checkpassword.value);
        localStorage.setItem('inputCity', city.value);
        localStorage.setItem('inputState', state.value);
        localStorage.setItem('inputCEP', cep.value);
    }

    /* Função para validar se campos estão corretos */
};