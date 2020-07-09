window.onload = () =>{
    /* Itens localStorage */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    var db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var db_eventos = JSON.parse(localStorage.getItem('db_eventos'));
    console.log(cadastroClienteLocal.eventos)
    var db_bares = JSON.parse(localStorage.getItem('db_bares'));

    //pegando id na url
    var url=window.location.search.replace("?", "").split("=");
    var idEvento = url[1]
    var idBar;
    var eventoLocal;
    console.log (idEvento);
    for (i=0; i<db_eventos.eventos.length; i++){
        if (idEvento==db_eventos.eventos[i].id){
            eventoLocal = db_eventos.eventos[i];
            console.log(eventoLocal);
            data = new Date(eventoLocal.data);
            idBar = eventoLocal.bar;
            document.getElementById("iconEvento").src = eventoLocal.icone;
            document.getElementById("eventoNome").innerText = eventoLocal.nome;
            document.getElementById("eventoDescricao").innerText = eventoLocal.descricao;
            document.getElementById("eventoHora").innerText = eventoLocal.horario + " no dia "+ data.toLocaleDateString();
        }
    }
    var idBar2
     for(i=0;i< db_bares.data.length; i++){
        if (idBar==db_bares.data[i].id){
            idBar2=i;
        }
    }


    let endereco = db_bares.data[idBar2].logradouro + ", " + db_bares.data[idBar2].numeroLocal + " - " + db_bares.data[idBar2].bairro + ", " + db_bares.data[idBar2].cidade + " - " + db_bares.data[idBar2].estado + ", " + db_bares.data[idBar2].cep;
    let telefone = db_bares.data[idBar2].telefone;


    let enderecoBar = document.getElementById('endereco');
    let telefoneBar = document.getElementById('telefone');

    enderecoBar.innerText = endereco;
    telefoneBar.innerText = telefone;



}