window.onload = () => {
    // Validação do formulário
    btnCriarEvento.disabled = true;
    var nomeValido = false;
    var dataValida = false;
    var horaValida = false;
    var convidadoValido = false;
    var eventoBarValido = false;
    var descricaoValida = false;

    eventoNome.oninput = () => {nomeValido = validarNome(); console.log("nomeValido: ", nomeValido)}
    eventoData.oninput = () => {dataValida = validarData(); console.log("dataValida: ", dataValida);}
    eventoHorario.oninput = ()  => {horaValida = validarHora(); console.log("horaValida: ", horaValida);}
    eventoDescricao.oninput = () => {descricaoValida = validarDescricao(); console.log("descricaoValida: ", descricaoValida);}

    formulario.oninput = () => {
        if(nomeValido && dataValida && horaValida && convidadoValido && eventoBarValido && descricaoValida) {
            console.log("BOTÃO DESABILITADO: ", false)
            btnCriarEvento.disabled = false;
        } else {
            console.log("BOTÃO DESABILITADO: ", true)
            btnCriarEvento.disabled = true;
        }
    }


    /* Editar cadastroClienteLocal */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));

    /* Pegar a referencia do array usuarios no db */
    let db_cliente = JSON.parse(localStorage.getItem('db_users'));
    let db_bares = JSON.parse(localStorage.getItem('db_bares'))
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
    if (db_bares.data.length) {
        let telaBares = document.getElementById('telaEstabelecimentos');
        let texto = '';
        let item;
        for (i = 0; i < db_bares.data.length; i++) {
            item = db_bares.data[i];
            texto += ` <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="${item.id}" name="bar">
            <label class="custom-control-label" for="${item.id}">
                <div class="card mb-3 card-bar">
                    <div class="row no-gutters global-wrapper">
                        <div class="col-4 img-square-wrapper">
                            <img src="https://loremflickr.com/400/300/pub,beer,party?ramdom=${item.id}"
                                class="card-img" alt="...">
                        </div>
                        <div class="col-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.nome}</h5>
                                <p class="card-text">
                                    <small class="text-muted">
                                        ★ 4.2 • $ • 1.5km
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
        </div>`
        }
        telaBares.innerHTML = texto;
    }

    //pegando lista de convidados
    var convidado = [];
    btnConvidados.onclick = () =>{
        let convidados = document.getElementsByClassName("convidados");
        for(i=0; i<convidados.length; i++){
            if(convidados[i].checked){
                convidado.push(convidados[i].id);
            }
        }

        convidadoValido = validarConvidados(convidado);
        console.log("convidadoValido: ", convidadoValido)
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
        eventoBarValido = validarBar(evento_bar);
        console.log("eventoBarValido: ", eventoBarValido)
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

        db_cliente.usuarios[posicaoArray].eventos.cadastrados.push({id: novoID, organizador: cadastroClienteLocal.email});
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
            "id": novoID,
            "nome": eventoNome.value,
            "icone": iconEvento,
            "organizador": cadastroClienteLocal.email,
            "horario": eventoHorario.value,
            "data": eventoData.value,
            "descricao": eventoDescricao.value,
            "convidados": convidado,
            "bar": evento_bar,
            confirmados: []
        }

        console.log(cadastroEvento)
        db_eventos.eventos.push(cadastroEvento);
        localStorage.setItem('db_eventos', JSON.stringify(db_eventos));
        localStorage.setItem('db_users', JSON.stringify(db_cliente));
        sessionStorage.setItem('usuarioCorrente', JSON.stringify(db_cliente.usuarios[posicaoArray]))
        window.location.href = "pagina-cliente.html";
    }
}



// Validação do formulário
function validarNome() {
    let checarNome = eventoNome.value;
    if(checarNome == "" || checarNome == null) {
        return false;
    } else {
        return true;
    }
}

function validarData() {
    let checarData = eventoData.value;
    if(checarData == "" || checarData == null) {
        return false;
    } else {
        return true;
    }
}

function validarHora() {
    let checarHorario = eventoHorario.value;
    if(checarHorario == "" || checarHorario == null) {
        return false;
    } else {
        return true;
    }
}

function validarConvidados(convidado) {
    if(convidado.length == 0) {
        return false;
    } else {
        return true;
    }
}
   
function validarBar(evento_bar) {
    if(evento_bar == "") {
        return false;
    } else {
        return true;
    }
}

function validarDescricao() {
    let descricao = eventoDescricao.value;
    if(descricao == "") {
        return false;
    } else {
        return true;
    }
}
