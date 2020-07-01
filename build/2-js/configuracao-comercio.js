

window.onload = () => {

/*Editar cadastroEstabelecimento */
	let cadastroEstabelecimento = JSON.parse(sessionStorage.getItem("estabelecimentoCorrente"));
	console.log(cadastroEstabelecimento)

	/* Pegar a referencia do array usuarios no db */
	let db_bares = JSON.parse(localStorage.getItem('db_bares'));
	var posicaoArray;
	for (i=0; i<db_bares.data.length;i++){
		if (cadastroEstabelecimento.nome == db_bares.data[i].nome){
			posicaoArray = i;
			break;
		}
}
	
	function updateEstabelecimento(){
		db_bares.data[posicaoArray] = cadastroEstabelecimento;
		sessionStorage.setItem('estabelecimentoCorrente', JSON.stringify(cadastroEstabelecimento));
		localStorage.setItem('db_bares', JSON.stringify(db_bares));
	}
	
	document.getElementById("nome").value = cadastroEstabelecimento.nome;
	document.getElementById("cnpj").value = cadastroEstabelecimento.cnpj;
	document.getElementById("email").value = cadastroEstabelecimento.email;
	document.getElementById("senha").value = cadastroEstabelecimento.senha;
	document.getElementById("cep").value = cadastroEstabelecimento.cep;
	document.getElementById("logradouro").value = cadastroEstabelecimento.logradouro;
	document.getElementById("numeroLocal").value = cadastroEstabelecimento.numeroLocal;
	document.getElementById("complemento").value = cadastroEstabelecimento.complemento;
	document.getElementById("bairro").value = cadastroEstabelecimento.bairro;
	document.getElementById("cidade").value = cadastroEstabelecimento.cidade;
	document.getElementById("estado").value = cadastroEstabelecimento.estado;
	document.getElementById("telefone").value = cadastroEstabelecimento.telefone;

btnCnpj.onclick = () => {
	if(cnpj.disabled) {
		cnpj.disabled = false;
		document.getElementById("btnCnpjImg").src = "0-imgs/icont/confirmar.png";
	} else {
		cnpj.disabled = true;
		document.getElementById("btnCnpjImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.cnpj = cnpj.value;
		updateEstabelecimento();
	};

}
btnEmail.onclick = () => {
	if(email.disabled) {
		email.disabled = false;
		document.getElementById("btnEmailImg").src = "0-imgs/icont/confirmar.png";
	} else {
		email.disabled = true;
		document.getElementById("btnEmailImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.email = email.value;
		updateEstabelecimento();
	};
}	
btnSenha.onclick = () => {
	if(senha.disabled) {
		senha.disabled = false;
		document.getElementById("btnSenhaImg").src = "0-imgs/icont/confirmar.png";
	} else {
		senha.disabled = true;
		document.getElementById("btnSenhaImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.senha = senha.value;
		updateEstabelecimento();
	};
}	
btnCep.onclick = () => {
	if(cep.disabled) {
		cep.disabled = false;
		document.getElementById("btnCepImg").src = "0-imgs/icont/confirmar.png";
	} else {
		function success() {
			let objEndereco = JSON.parse(this.responseText);

			if (objEndereco.erro == true) {
				alert("O CEP digitado não existe!");

			} else {
				logradouro.value = objEndereco.logradouro;
				cidade.value = objEndereco.localidade;
				estado.value = objEndereco.uf;
				bairro.value = objEndereco.bairro;
				numeroLocal.value = ''
				cadastroEstabelecimento.numeroLocal= numeroLocal.value
				cadastroEstabelecimento.cep = cep.value;
				cadastroEstabelecimento.bairro = bairro.value;
				cadastroEstabelecimento.logradouro = logradouro.value;
				cadastroEstabelecimento.cidade = cidade.value;
				cadastroEstabelecimento.estado = estado.value;
				updateEstabelecimento();
			};
		};

		function error(err) {
			console.log('Erro:', err);
		};

		cep.disabled = true;
		document.getElementById("btnCepImg").src = "0-imgs/icont/editar.png";
		var xhr = new XMLHttpRequest();
		xhr.onload = success;
		xhr.onerror = error;
		xhr.open('GET', `https://viacep.com.br/ws/${cep.value}/json/`);
		xhr.send();
	};
};

btnLogradouro.onclick = () => {
	if(logradouro.disabled) {
		logradouro.disabled = false;
		document.getElementById("btnLogradouroImg").src = "0-imgs/icont/confirmar.png";
	} else {
		logradouro.disabled = true;
		document.getElementById("btnLogradouroImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.logradouro = logradouro.value;
		updateEstabelecimento();
	};
}
btnNumeroLocal.onclick = () => {
	if(numeroLocal.disabled) {
		numeroLocal.disabled = false;
		document.getElementById("btnNumeroLocalImg").src = "0-imgs/icont/confirmar.png";
	} else {
		numeroLocal.disabled = true;
		document.getElementById("btnNumeroLocalImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.numeroLocal = numeroLocal.value;
		updateEstabelecimento();
	};
}
btnComplemento.onclick = () => {
	if(complemento.disabled) {
		complemento.disabled = false;
		document.getElementById("btnComplementoImg").src = "0-imgs/icont/confirmar.png";
	} else {
		complemento.disabled = true;
		document.getElementById("btnComplementoImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.complemento = complemento.value;
		updateEstabelecimento();
	};
}
btnBairro.onclick = () => {
	if(bairro.disabled) {
		bairro.disabled = false;
		document.getElementById("btnBairroImg").src = "0-imgs/icont/confirmar.png";
	} else {
		bairro.disabled = true;
		document.getElementById("btnBairroImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.bairro = bairro.value;
		updateEstabelecimento();
	};
}
btnCidade.onclick = () => {
	if(cidade.disabled) {
		cidade.disabled = false;
		document.getElementById("btnCidadeImg").src = "0-imgs/icont/confirmar.png";
	} else {
		cidade.disabled = true;
		document.getElementById("btnCidadeImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.cidade = cidade.value;
		updateEstabelecimento();
	};
}
btnEstado.onclick = () => {
	if(estado.disabled) {
		estado.disabled = false;
		document.getElementById("btnEstadoImg").src = "0-imgs/icont/confirmar.png";
	} else {
		estado.disabled = true;
		document.getElementById("btnEstadoImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.estado = estado.value;
		updateEstabelecimento();
	};
}
btnTelefone.onclick = () => {
	if(telefone.disabled) {
		telefone.disabled = false;
		document.getElementById("btnTelefoneImg").src = "0-imgs/icont/confirmar.png";
	} else {
		telefone.disabled = true;
		document.getElementById("btnTelefoneImg").src = "0-imgs/icont/editar.png";
		cadastroEstabelecimento.telefone = telefone.value;
		updateEstabelecimento();
	};	
}




	/* Trocar de avatares */
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
}