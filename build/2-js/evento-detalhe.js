window.onload = () => {
    /* Itens localStorage */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    var db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var db_eventos = JSON.parse(localStorage.getItem('db_eventos'));
    console.log(cadastroClienteLocal.eventos)
    var db_bares = JSON.parse(localStorage.getItem('db_bares'));

    //pegando id na url
    var url = window.location.search.replace("?", "").split("=");
    var idEvento = url[1]
    console.log(idEvento)
    var idBar;
    var eventoLocal;
    //posicao no array db
    var posicaoArray;
    for (i = 0; i < db_cliente.usuarios.length; i++) {
        if (cadastroClienteLocal.email == db_cliente.usuarios[i].email) {
            posicaoArray = i;
            break;
        }
    }
    // Mostrar itens
    for (i = 0; i < db_eventos.eventos.length; i++) {
        if (idEvento == db_eventos.eventos[i].id) {
            eventoLocal = db_eventos.eventos[i];
            data = new Date(eventoLocal.data);
            idBar = eventoLocal.bar;
            document.getElementById("iconEvento").src = eventoLocal.icone;
            document.getElementById("eventoNome").innerText = eventoLocal.nome;
            document.getElementById("eventoDescricao").innerText = eventoLocal.descricao;
            document.getElementById("eventoHora").innerText = eventoLocal.horario + " no dia " + data.toLocaleDateString();
            document.getElementById('pessoas-confirmadas').innerText = db_eventos.eventos[i].confirmados.length;
            document.getElementById('pessoas-naoconfirmadas').innerText = db_eventos.eventos[i].convidados.length - db_eventos.eventos[i].confirmados.length;
        }
    }
    var idBar2
    for (i = 0; i < db_bares.data.length; i++) {
        if (idBar == db_bares.data[i].id) {
            idBar2 = i;
        }
    }
    console.log(idBar)
    let endereco = db_bares.data[idBar2].logradouro + ", " + db_bares.data[idBar2].numeroLocal + " - " + db_bares.data[idBar2].bairro + ", " + db_bares.data[idBar2].cidade + " - " + db_bares.data[idBar2].estado + ", " + db_bares.data[idBar2].cep;
    let telefone = db_bares.data[idBar2].telefone;
    let enderecoBar = document.getElementById('endereco');
    let telefoneBar = document.getElementById('telefone');
    enderecoBar.innerText = endereco;
    telefoneBar.innerText = telefone;

    //
    btnConfirmar.onclick = () => {
        for (i = 0; i < cadastroClienteLocal.eventos.cadastrados.length; i++) {
            if (idEvento == cadastroClienteLocal.eventos.cadastrados[i].id) {
                alert('Você já está confirmado neste evento')
                return;
            }
        }
        eventoLocal.confirmados.push(cadastroClienteLocal.email)
        for (i = 0; i < db_eventos.eventos.length; i++) {
            if (idEvento == db_eventos.eventos[i].id) {
                db_eventos.eventos[i] = eventoLocal
            }
        }
        for (i=0; i<cadastroClienteLocal.eventos.conviteRecebido.length; i++){
            if(idEvento == cadastroClienteLocal.eventos.conviteRecebido[i]){
                cadastroClienteLocal.eventos.conviteRecebido.splice(j, 1);
            }
        }
        cadastroClienteLocal.eventos.cadastrados.push({id:idEvento})
        db_cliente.usuarios[posicaoArray] = cadastroClienteLocal
        localStorage.setItem('db_eventos',JSON.stringify(db_eventos));
        localStorage.setItem('db_users', JSON.stringify(db_cliente))
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(cadastroClienteLocal));
        alert('Confirmado')
    }

}