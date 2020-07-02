window.onload = () => {
    /*Pegando dados do db*/
    let db_users = JSON.parse(localStorage.getItem('db_users'));
    let cadastroClienteLocal = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

    /*Tela de solicitações de amizade*/
    if (cadastroClienteLocal.amigos.conviteRecebido.length > 0) {
        let divTela = document.getElementById('telaSolicitAmz')
        let texto = '';
        let item = ''
        for (i = 0; i < cadastroClienteLocal.amigos.conviteRecebido.length; i++) {
            item = cadastroClienteLocal.amigos.conviteRecebido[i];
            texto += `<tr>
            <td>${item}</td>
            <td><button>aceitar</button></td>
            <td><button>x</button></td>
        </tr>`
        }
        divTela.innerHTML = texto;
    }

    /*Pegar referência do usuario no array*/
    var posicaoArray;
    for (i = 0; i < db_users.usuarios.length; i++) {
        if (cadastroClienteLocal.email == db_users.usuarios[i].email) {
            posicaoArray = i;
            break;
        }
    }

    /*Funçao de Update*/
    function updateContato() {
        db_users.usuarios[posicaoArray] = cadastroClienteLocal;
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(cadastroClienteLocal));
        localStorage.setItem(`db_users`, JSON.stringify(db_users));
    }


    /*Função para executar pesquisa*/
    campoPesquisa.onkeyup = () => {
        let valor = campoPesquisa.value.toLowerCase();
        let divTela = document.getElementById('telaPesquisa');
        let texto = '';
        let usuario = '';
        for (i = 0; i < db_users.usuarios.length; i++) {
            usuario = db_users.usuarios[i];
            nomeSobrenome = usuario.nome + " " + usuario.sobrenome;
            if (usuario.nome.toLowerCase().indexOf(valor) != -1 || usuario.sobrenome.toLowerCase().indexOf(valor) != -1 || usuario.email.toLowerCase().indexOf(valor) != -1 || nomeSobrenome.toLowerCase().indexOf(valor) != -1) {
                if (i != posicaoArray) {
                    texto += `  <div class="row card-PesquisaAmigos">
                <div class="col-3">
                    <img src="${usuario.avatar}" alt="">
                </div>
                <div class="col-6">
                    <h4>${usuario.nome} ${usuario.sobrenome}</h4>
                    <p>${usuario.email}</p>
                </div>
                <div class="col-3">
                    <button id='${usuario.id}'>Adicionar</button>
                </div>
            </div>`;
                }
            }
        }
        if (valor == '') {
            texto = ' '
        }
        divTela.innerHTML = texto;
    }


    /*Enviando convite no LocalStorage*/
    enviarConviteAmizade = (idAmigo) => {
        let usuario;
        for (i = 0; i < db_users.usuarios.length; i++) {
            usuario = db_users.usuarios[i];
            if (idAmigo == usuario.id) {
                let valor = true;
                valor = verificaEmail(usuario);
                if (valor) {
                    db_users.usuarios[i].amigos.conviteRecebido.push(cadastroClienteLocal.email)
                    cadastroClienteLocal.amigos.conviteEnviado.push(usuario.email)
                    alert('Convite Enviado')
                    updateContato();
                }
            }
        }
    }
    verificaEmail = (usuario) => {
        for (j = 0; j < cadastroClienteLocal.amigos.conviteEnviado.length; j++) {
            console.log(cadastroClienteLocal.amigos.conviteEnviado[j])
            if (cadastroClienteLocal.amigos.conviteEnviado[j] == usuario.email) {
                alert('O convite já foi enviado')
                return false
            }
        }
        return true;
    }

    /*Event Delegation*/
    addAmigo = (evento) => {
        let idAddAmigo;
        if (evento.target.matches('button')) {
            console.log(evento.target)
            idAddAmigo = evento.target.id;
            enviarConviteAmizade(idAddAmigo);
        }
    }




    aceitarConvite = (emailAcc) => {
        let usuario;
        for (i = 0; i < db_users.usuarios.length; i++) {
            usuario = db_users.usuarios[i];
            if (emailAcc = usuario.email) {
                console.log('adicionar ao array')
            }
        }
    }
    recusarConvite = () =>{ 
        console.log('recusar');
    }

    respSolicit = (evento) => {
        let emailAcc;
        if (evento.target.matches('button')) {
            if (evento.target.textContent == 'aceitar') {
                emailAcc = evento.target.id;
                aceitarConvite(emailAcc)
            }
            else {
                recusarConvite()
            }
        }
    }


    telaSolicitAmz.onclick = respSolicit;
    telaPesquisa.onclick = addAmigo;
}







