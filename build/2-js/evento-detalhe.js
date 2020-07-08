window.onload = () =>{
    /* Itens localStorage */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    var db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var db_eventos = JSON.parse(localStorage.getItem('db_eventos'));
    console.log(cadastroClienteLocal.eventos)

    //pegando id na url
    var url=window.location.search.replace("?", "").split("=");
    var idEvento = url[1]
    console.log (idEvento);
    for (i=0; i<db_eventos.eventos.length; i++){
        if (idEvento==db_eventos.eventos[i].id){
            eventoLocal = db_eventos.eventos[i];
            data = new Date(eventoLocal.data)
            document.getElementById("iconEvento").src = eventoLocal.icone;
            document.getElementById("eventoDescricao").innerText = eventoLocal.descricao;
            document.getElementById("eventoHora").innerText = eventoLocal.horario + " no dia "+ data.toLocaleDateString();
        }
    }




}