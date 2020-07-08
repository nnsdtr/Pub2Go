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
                        <input type="checkbox" class="custom-control-input convidados" id="${amigo.email}">
                        <label class="custom-control-label" for="${amigo.email}">${amigo.nome} ${amigo.sobrenome}</label>
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
                convidado.push(convidados[i].id);
                console.log(convidado);
            }
        }
    }


    // Tela de bares disponíveis
    // VAZIO: PARA IMPLEMENTAR


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


    /* Trocar de iconEventos */
	var btn = document.getElementById("imageBtn");
	var modal = document.getElementById("myModal");
	var span = document.getElementById("closeBtn");

	btn.onclick = () => {
		modal.style.display = "block";
	}

	span.onclick = () => {
		modal.style.display = "none";
	}

	window.onclick = (event) => {
		if(event.target == modal) {
			modal.style.display = "none";
		}
    }

    var iconEvento="0-imgs/eventos/049-bar.png";
    iconEvento01.onclick = () => {let srcIMG = document.getElementById("iconEvento01").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento02.onclick = () => {let srcIMG = document.getElementById("iconEvento02").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento03.onclick = () => {let srcIMG = document.getElementById("iconEvento03").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento04.onclick = () => {let srcIMG = document.getElementById("iconEvento04").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento05.onclick = () => {let srcIMG = document.getElementById("iconEvento05").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento06.onclick = () => {let srcIMG = document.getElementById("iconEvento06").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento07.onclick = () => {let srcIMG = document.getElementById("iconEvento07").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento08.onclick = () => {let srcIMG = document.getElementById("iconEvento08").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento09.onclick = () => {let srcIMG = document.getElementById("iconEvento09").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento10.onclick = () => {let srcIMG = document.getElementById("iconEvento10").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento11.onclick = () => {let srcIMG = document.getElementById("iconEvento11").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento12.onclick = () => {let srcIMG = document.getElementById("iconEvento12").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento13.onclick = () => {let srcIMG = document.getElementById("iconEvento13").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento14.onclick = () => {let srcIMG = document.getElementById("iconEvento14").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento15.onclick = () => {let srcIMG = document.getElementById("iconEvento15").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento16.onclick = () => {let srcIMG = document.getElementById("iconEvento16").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento17.onclick = () => {let srcIMG = document.getElementById("iconEvento17").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento18.onclick = () => {let srcIMG = document.getElementById("iconEvento18").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento19.onclick = () => {let srcIMG = document.getElementById("iconEvento19").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento20.onclick = () => {let srcIMG = document.getElementById("iconEvento20").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento21.onclick = () => {let srcIMG = document.getElementById("iconEvento21").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento22.onclick = () => {let srcIMG = document.getElementById("iconEvento22").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento23.onclick = () => {let srcIMG = document.getElementById("iconEvento23").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento24.onclick = () => {let srcIMG = document.getElementById("iconEvento24").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento25.onclick = () => {let srcIMG = document.getElementById("iconEvento25").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento26.onclick = () => {let srcIMG = document.getElementById("iconEvento26").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento27.onclick = () => {let srcIMG = document.getElementById("iconEvento27").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento28.onclick = () => {let srcIMG = document.getElementById("iconEvento28").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento29.onclick = () => {let srcIMG = document.getElementById("iconEvento29").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento30.onclick = () => {let srcIMG = document.getElementById("iconEvento30").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento31.onclick = () => {let srcIMG = document.getElementById("iconEvento31").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; };
	iconEvento32.onclick = () => {let srcIMG = document.getElementById("iconEvento32").src; document.getElementById("iconEvento").src = srcIMG; iconEvento = srcIMG; }


// Botao criar evento disparado
    btnCriarEvento.onclick = (evento) => {
        evento.preventDefault();
        let novoID = db_eventos.eventos.length + 1;

        db_cliente.usuarios[posicaoArray].eventos.cadastrados.push(cadastroClienteLocal.email);

        for(i=0; i<convidado.length;i++){
            db_cliente.usuarios[posicaoArray].eventos.conviteEnviado.push(convidado[i]);
        }

        for (i=0;i<db_cliente.usuarios.length;i++){
            for(j=0;j<convidado.length;j++){
                if(convidado[j]==db_cliente.usuarios[i].email){
                    db_cliente.usuarios[i].eventos.conviteRecebido.push({id:novoID, organizador:cadastroClienteLocal.email})
                }
            }
        }

        let cadastroEvento = {
            id: novoID,
            icone: iconEvento,
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
        localStorage.setItem('db_users', JSON.stringify(db_cliente));
        window.location.href = "pagina-cliente.html";
    }
}



// Validação do formulário
function validarFormulario() {
    var nomeValido = false;
    eventoNome.oninput = () => {
        let checarNome = eventoNome.value;
        if(checarNome == "" || checarNome == null) {
            nomeValido = false;
        } else {
            nomeValido = true;
        }
    }

    var dataValida = false;
    eventoData.oninput = () => {
        let checarData = eventoData.value;
        if(checarData == "" || checarData == null) {
            dataValida = false;
        } else {
            dataValida = true;
        }
    }

    var horaValida = false;
    eventoHorario.oninput = () => {
        let checarHorario = eventoHorario.value;
        if(checarHorario == "" || checarHorario == null) {
            horaValida = false;
        } else {
            horaValida = true;
        }
    }

    var convidadoValido = false;
    btnCloseConvidado.onclick = () => {
        if(convidado.length == 0) {
            convidadoValido = false;
        } else {
            convidadoValido = true;
        }
    }

    var eventoBarValido = false;
    btnCloseBar.onclick = () => {
        if(event_bar == "") {
            eventoBarValido = false;
        } else {
            eventoBarValido = true;
        }
    }

    if(nomeValido && dataValida && horaValida && convidadoValido && eventoBarValido) {
        btnCriarEvento.disabled = false;
    } else {
        btnCriarEvento.disabled = true;
    }
}
