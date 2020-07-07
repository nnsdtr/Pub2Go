window.onload = () => {
    /* Editar cadastroClienteLocal */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    /* Pegar a referencia do array usuarios no db */
    let db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var posicaoArray;
    for (i = 0; i < db_cliente.usuarios.length; i++) {
        if (cadastroClienteLocal.email == db_cliente.usuarios[i].email) {
            posicaoArray = i;
            break;
        }
    }
    let db_eventos = JSON.parse(localStorage.getItem('db_eventos'))
    if (!db_eventos) {
        db_eventos = {
            "eventos": []
        };
    }
    // Tela de amigos cadastrados
    if(cadastroClienteLocal.amigos.cadastrados.length>0){
        let telaAmigos = document.getElementById('telaAmigos');
        let texto = '';
        let amigo = '';
        for (i=0; i<cadastroClienteLocal.amigos.cadastrados.length; i++){
            amigo = cadastroClienteLocal.amigos.cadastrados[i];
            for(j=0; j<db_cliente.usuarios.length;j++){
                if (amigo == db_cliente.usuarios[j].email){
                    amigo = db_cliente.usuarios[j];
                    texto +=` 
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input convidados" id="${amigo.id}">
                    <label class="custom-control-label" for="${amigo.id}">${amigo.nome} ${amigo.sobrenome}</label>
                </div>`;
                }
            }
        }
        telaAmigos.innerHTML=texto;
    }

    //pegando lista de convidados
    var convidado = [];
    btnConvidados.onclick = () =>{
        let convidados = document.getElementsByClassName("convidados");
        for(i=0; i<convidados.length; i++){
            if(convidados[i].checked){
                convidado.push(convidados[i].id)
                console.log(convidado);
            }
        }
    }
    //pegando bar escolhido
    var evento_bar;
    btnBar.onclick = () => {
        let evento_bares = document.getElementsByName("bar");
        for (i=0; i<evento_bares.length; i++){
            if(evento_bares[i].checked){
                evento_bar=evento_bares[i].id;
                break;
            }
        }
    }

//botao criar evento disparado
    btnCriarEvento.onclick= (evento) => {
        evento.preventDefault();
        let novoID = db_eventos.eventos.length + 1;
        let cadastroEvento = {
            id: novoID,
            organizador: cadastroClienteLocal.email,
            horario: eventoHorario.value,
            data: eventoData.value,
            descricao: eventoDescricao.value,
            convidados: convidado,
            bar: evento_bar,
        }
        console.log(cadastroEvento)
        db_eventos.eventos.push(cadastroEvento);
        localStorage.setItem('db_eventos', JSON.stringify(db_eventos));
        window.location.href = "pagina-cliente.html";
    }
}
