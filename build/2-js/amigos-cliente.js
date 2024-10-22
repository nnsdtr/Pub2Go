window.onload = () => {
    /*Pegando dados do db*/
    let db_users = JSON.parse(localStorage.getItem('db_users'));
    let cadastroClienteLocal = JSON.parse(sessionStorage.getItem('usuarioCorrente'));

    /*Tela de solicitações de amizade, verifica se há convites recebidos e os mostra   -4*/
    mostrarSolicitacoes = () => {
        if (cadastroClienteLocal.amigos.conviteRecebido.length > 0) {
            let divTela = document.getElementById('telaSolicitAmz');
            let texto = '';
            let item = ''
            for (i = 0; i < cadastroClienteLocal.amigos.conviteRecebido.length; i++) {
                item = cadastroClienteLocal.amigos.conviteRecebido[i];
                texto += `<tr>
            <td>${item}</td>
            <td><button id= '${item}'>aceitar</button></td>
            <td><button id='${item}'>x</button></td>
        </tr>`
            }
            divTela.innerHTML = texto;
        }
    }
    // Tela de amigos cadastrados
    if (cadastroClienteLocal.amigos.cadastrados.length > 0) {
        let telaAmigos = document.getElementById('telaAmigos');
        let texto = '';
        let amigo = ''
        for (i = 0; i < cadastroClienteLocal.amigos.cadastrados.length; i++) {
            amigo = cadastroClienteLocal.amigos.cadastrados[i];
            for (j = 0; j < db_users.usuarios.length; j++) {
                if (amigo == db_users.usuarios[j].email) {
                    texto += `  <div class="col-md-3">
                    <img src="${db_users.usuarios[j].avatar}" alt="">
                    <span>${db_users.usuarios[j].nome} ${db_users.usuarios[j].sobrenome}</span>
                </div>`
                }
            }
        }
        telaAmigos.innerHTML = texto;
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


    /*Função para executar pesquisa- utiliza o método indexOf 1*/
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


    /*Enviando convite no LocalStorage, pega a referencia do amigo adicionado, chama o metodo verificaEmail para evitar mais de um convite para a um amigo cadastrado ou ja enviado 
    puxa aos arrays o email de cada um e chama o metodo update, que atualiza o local e sessionStorage    - 3*/
    enviarConviteAmizade = (idAmigo) => {
        let usuario;
        for (i = 0; i < db_users.usuarios.length; i++) {
            usuario = db_users.usuarios[i];
            if (idAmigo == usuario.id) {
                let valorVerifica;
                valorVerifica = verificaEmail(usuario);
                if (valorVerifica) {
                    db_users.usuarios[i].amigos.conviteRecebido.push(cadastroClienteLocal.email)
                    cadastroClienteLocal.amigos.conviteEnviado.push(usuario.email)
                    alert('Convite Enviado')
                    updateContato();
                }
            }
        }
    }
    //barrando mais de um convite para mesma pessoa
    verificaEmail = (usuario) => {
        for (j = 0; j < cadastroClienteLocal.amigos.conviteEnviado.length; j++) {
            if (cadastroClienteLocal.amigos.conviteEnviado[j] == usuario.email) {
                alert('Você já enviou convite de amizade para esta pessoa');
                return false;

            }
        }
        for (j = 0; j < cadastroClienteLocal.amigos.conviteRecebido.length; j++) {
            if (cadastroClienteLocal.amigos.conviteRecebido[j] == usuario.email) {
                alert('Verifique a caixa de solicitação de amizade');
                return false;
            }
        }
        for (j = 0; j < cadastroClienteLocal.amigos.cadastrados.length; j++) {
            if (cadastroClienteLocal.amigos.cadastrados[j] == usuario.email) {
                alert('Já esta na sua lista de amigos');
                return false;
            }
        }
        return true;
    }
    /*Event Delegation enviar convite de amizade, pega o id do alvo e chama o método addAmigo enviando-o como parametro 2-*/
    addAmigo = (evento) => {
        let idAddAmigo;
        if (evento.target.matches('button')) {
            idAddAmigo = evento.target.id;
            enviarConviteAmizade(idAddAmigo);
        }
    }
    // Aceitar e recusar convites de amizade, além de puxar para o array de amigos cadastrados, exclui (splice) dos outros arrays 6-
    aceitarConvite = (emailAcc) => {
        let amigoCorrente;
        for (i = 0; i < db_users.usuarios.length; i++) {
            amigoCorrente = db_users.usuarios[i];
            if (emailAcc == amigoCorrente.email) {
                for (j = 0; j < cadastroClienteLocal.amigos.conviteRecebido.length; j++) {
                    if (amigoCorrente.email == cadastroClienteLocal.amigos.conviteRecebido[j]) {
                        cadastroClienteLocal.amigos.conviteRecebido.splice(j, 1)
                    }
                }
                for (j = 0; j < cadastroClienteLocal.amigos.conviteEnviado.length; j++) {
                    if (amigoCorrente.email == cadastroClienteLocal.amigos.conviteEnviado[j]) {
                        cadastroClienteLocal.amigos.conviteEnviado.splice(j, 1)

                    }
                }
                for (j = 0; j < amigoCorrente.amigos.conviteRecebido.length; j++) {
                    if (cadastroClienteLocal.email == amigoCorrente.amigos.conviteRecebido[j]) {
                        amigoCorrente.amigos.conviteRecebido.splice(j, 1)
                    }
                }
                for (j = 0; j < amigoCorrente.amigos.conviteEnviado.length; j++) {
                    if (cadastroClienteLocal.email == amigoCorrente.amigos.conviteEnviado[j]) {
                        amigoCorrente.amigos.conviteEnviado.splice(j, 1)

                    }
                }
                cadastroClienteLocal.amigos.cadastrados.push(amigoCorrente.email);
                amigoCorrente.amigos.cadastrados.push(cadastroClienteLocal.email);
                db_users.usuarios[i].amigos = amigoCorrente.amigos;
                alert('Amigo cadastrado');
                updateContato();
                document.location.reload(true);
            }
        }
    }

    //Exclui o item do array de convite recebido, e enviado dos dois usuários 7-
    recusarConvite = (emailRec) => {
        for (i = 0; i < cadastroClienteLocal.amigos.conviteRecebido.length; i++) {
            if (emailRec == cadastroClienteLocal.amigos.conviteRecebido[i]) {
                cadastroClienteLocal.amigos.conviteRecebido.splice(i, 1)
            }
        }
        let contaRec;
        for (i = 0; i < db_users.usuarios.length; i++) {
            contaRec = db_users.usuarios[i];
            if (contaRec.email == emailRec) {
                for (j = 0; j < contaRec.amigos.conviteEnviado.length; j++) {
                    if (contaRec.amigos.conviteEnviado[j] == cadastroClienteLocal.email) {
                        contaRec.amigos.conviteEnviado.splice(j, 1);
                        db_users.usuarios[i] = contaRec;
                    }
                }
            }
        }
        updateContato();
        document.location.reload(true);
    }

    //event delegation, verifica se o item clicado é para aceitar convite ou recusar e chama seu respectivo metodo mandando e id do item clicado como parametro 5-
    respSolicit = (evento) => {
        let emailAcc;
        if (evento.target.matches('button')) {
            emailAcc = evento.target.id;
            if (evento.target.textContent == 'aceitar') {
                aceitarConvite(emailAcc);
            }
            else {
                recusarConvite(emailAcc);
            }
        }
    }
    telaSolicitAmz.onclick = respSolicit;
    telaPesquisa.onclick = addAmigo;
    mostrarSolicitacoes()
}


