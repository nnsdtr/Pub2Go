
/* Aparecer o nome da imagem selecionada*/
jQuery(function ($) {
	$('input[type="file"]').change(function () {
		if ($(this).val()) {
			var filename = $(this).val();
			$(this).closest('.file-upload').find('.file-name').html(filename);
		}
	});
});

/**/

$('#clicavel').click(function () {
	console.log("Clicked");
});


window.onload = () => {

	/* Editar cadastroClienteLocal */
	var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));

	/* Pegar a referencia do array usuarios no db */
	let db_cliente = JSON.parse(localStorage.getItem('db_users'));
	var posicaoArray;
	for (i=0; i<db_cliente.usuarios.length;i++){
		if (cadastroClienteLocal.email == db_cliente.usuarios[i].email){
			posicaoArray = i;
			break;
		}
}
	
	function updateContato(){
		db_cliente.usuarios[posicaoArray] = cadastroClienteLocal;
		sessionStorage.setItem('usuarioCorrente', JSON.stringify(cadastroClienteLocal));
		localStorage.setItem(`db_users`, JSON.stringify(db_cliente));
	}


	document.getElementById("email").value = cadastroClienteLocal.email;
	document.getElementById("nome").value = cadastroClienteLocal.nome;
	document.getElementById("sobrenome").value = cadastroClienteLocal.sobrenome;
	document.getElementById("telefone").value = cadastroClienteLocal.telefone;
	document.getElementById("senha").value = cadastroClienteLocal.senha;
	document.getElementById("anonascimento").value = cadastroClienteLocal.anonascimento;
	document.getElementById("logradouro").value = cadastroClienteLocal.logradouro;
	document.getElementById("cidade").value = cadastroClienteLocal.cidade;
	document.getElementById("estado").value = cadastroClienteLocal.estado;
	document.getElementById("cep").value = cadastroClienteLocal.cep;
	document.getElementById("perfilAvatar").src = cadastroClienteLocal.avatar;

	btnNome.onclick = () => {
		if(nome.disabled) {
			nome.disabled = false;
			document.getElementById("btnNomeImg").src = "0-imgs/icont/confirmar.png";
		} else {
			nome.disabled = true;
			document.getElementById("btnNomeImg").src = "0-imgs/icont/editar.png";
			cadastroClienteLocal.nome = nome.value;
			updateContato();
		};
	};

	btnSobrenome.onclick = () => {
		if(sobrenome.disabled) {
			sobrenome.disabled = false;
			document.getElementById("btnSobrenomeImg").src = "0-imgs/icont/confirmar.png";
		} else {
			sobrenome.disabled = true;
			document.getElementById("btnSobrenomeImg").src = "0-imgs/icont/editar.png";
			cadastroClienteLocal.sobrenome = sobrenome.value;
			updateContato();
		};
	};

	btnTelefone.onclick = () => {
		if(telefone.disabled) {
			telefone.disabled = false;
			document.getElementById("btnTelefoneImg").src = "0-imgs/icont/confirmar.png";
		} else {
			telefone.disabled = true;
			document.getElementById("btnTelefoneImg").src = "0-imgs/icont/editar.png";
			cadastroClienteLocal.telefone = telefone.value;
			updateContato();
		};
	};

	btnSenha.onclick = () => {
		if(senha.disabled) {
			senha.disabled = false;
			document.getElementById("btnSenhaImg").src = "0-imgs/icont/confirmar.png";
		} else {
			senha.disabled = true;
			document.getElementById("btnSenhaImg").src = "0-imgs/icont/editar.png";
			cadastroClienteLocal.senha = senha.value;
			updateContato();
		};
	};


	btnCep.onclick = () => { //Ainda não altera no perfil os dados do endereço
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

					cadastroClienteLocal.cep = cep.value;
					cadastroClienteLocal.logradouro = logradouro.value
					cadastroClienteLocal.cidade = cidade.value
					cadastroClienteLocal.estado = estado.value
					
				updateContato();
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



	/* Editar preferências */
	let preferenciasClienteLocal = cadastroClienteLocal.preferenciasClienteLocal;

	/* categorias de estabelecimentos */
	document.getElementById("boate").checked = preferenciasClienteLocal.categorias.boate;
	document.getElementById("buteco").checked = preferenciasClienteLocal.categorias.buteco;
	document.getElementById("churrascaria").checked = preferenciasClienteLocal.categorias.churrascaria;
	document.getElementById("restaurante").checked = preferenciasClienteLocal.categorias.restaurante;
	document.getElementById("burgueria").checked = preferenciasClienteLocal.categorias.burgueria;

	boate.onchange = () => {
		preferenciasClienteLocal.categorias.boate = document.getElementById("boate").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};
	buteco.onchange = () => {
		preferenciasClienteLocal.categorias.buteco = document.getElementById("buteco").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};
	churrascaria.onchange = () => {
		preferenciasClienteLocal.categorias.churrascaria = document.getElementById("churrascaria").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};
	restaurante.onchange = () => {
		preferenciasClienteLocal.categorias.restaurante = document.getElementById("restaurante").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};
	burgueria.onchange = () => {
		preferenciasClienteLocal.categorias.burgueria = document.getElementById("burgueria").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};



	/* culinárias */
	document.getElementById("brasileira").checked = preferenciasClienteLocal.culinarias.brasileira;
	document.getElementById("italiana").checked = preferenciasClienteLocal.culinarias.italiana;
	document.getElementById("alema").checked = preferenciasClienteLocal.culinarias.alema;
	document.getElementById("japonesa").checked = preferenciasClienteLocal.culinarias.japonesa;
	document.getElementById("pizza").checked = preferenciasClienteLocal.culinarias.pizza;

	brasileira.onchange = () => {
		preferenciasClienteLocal.culinarias.brasileira = document.getElementById("brasileira").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};

	italiana.onchange = () => {
		preferenciasClienteLocal.culinarias.italiana = document.getElementById("italiana").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};

	alema.onchange = () => {
		preferenciasClienteLocal.culinarias.alema = document.getElementById("alema").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};

	japonesa.onchange = () => {
		preferenciasClienteLocal.culinarias.japonesa = document.getElementById("japonesa").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};

	pizza.onchange = () => {
		preferenciasClienteLocal.culinarias.pizza = document.getElementById("pizza").checked;
		cadastroClienteLocal.preferenciasClienteLocal = preferenciasClienteLocal;
		updateContato();
	};



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

	avatar01.onclick = () => {let srcIMG = document.getElementById("avatar01").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar02.onclick = () => {let srcIMG = document.getElementById("avatar02").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar03.onclick = () => {let srcIMG = document.getElementById("avatar03").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar04.onclick = () => {let srcIMG = document.getElementById("avatar04").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar05.onclick = () => {let srcIMG = document.getElementById("avatar05").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar06.onclick = () => {let srcIMG = document.getElementById("avatar06").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar07.onclick = () => {let srcIMG = document.getElementById("avatar07").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar08.onclick = () => {let srcIMG = document.getElementById("avatar08").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar09.onclick = () => {let srcIMG = document.getElementById("avatar09").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar10.onclick = () => {let srcIMG = document.getElementById("avatar10").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar11.onclick = () => {let srcIMG = document.getElementById("avatar11").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar12.onclick = () => {let srcIMG = document.getElementById("avatar12").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar13.onclick = () => {let srcIMG = document.getElementById("avatar13").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar14.onclick = () => {let srcIMG = document.getElementById("avatar14").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar15.onclick = () => {let srcIMG = document.getElementById("avatar15").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar16.onclick = () => {let srcIMG = document.getElementById("avatar16").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar17.onclick = () => {let srcIMG = document.getElementById("avatar17").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar18.onclick = () => {let srcIMG = document.getElementById("avatar18").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar19.onclick = () => {let srcIMG = document.getElementById("avatar19").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar20.onclick = () => {let srcIMG = document.getElementById("avatar20").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar21.onclick = () => {let srcIMG = document.getElementById("avatar21").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar22.onclick = () => {let srcIMG = document.getElementById("avatar22").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar23.onclick = () => {let srcIMG = document.getElementById("avatar23").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar24.onclick = () => {let srcIMG = document.getElementById("avatar24").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar25.onclick = () => {let srcIMG = document.getElementById("avatar25").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar26.onclick = () => {let srcIMG = document.getElementById("avatar26").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar27.onclick = () => {let srcIMG = document.getElementById("avatar27").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar28.onclick = () => {let srcIMG = document.getElementById("avatar28").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar29.onclick = () => {let srcIMG = document.getElementById("avatar29").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar30.onclick = () => {let srcIMG = document.getElementById("avatar30").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar31.onclick = () => {let srcIMG = document.getElementById("avatar31").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar32.onclick = () => {let srcIMG = document.getElementById("avatar32").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar33.onclick = () => {let srcIMG = document.getElementById("avatar33").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar34.onclick = () => {let srcIMG = document.getElementById("avatar34").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar35.onclick = () => {let srcIMG = document.getElementById("avatar35").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar36.onclick = () => {let srcIMG = document.getElementById("avatar36").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar37.onclick = () => {let srcIMG = document.getElementById("avatar37").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar38.onclick = () => {let srcIMG = document.getElementById("avatar38").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar39.onclick = () => {let srcIMG = document.getElementById("avatar39").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar40.onclick = () => {let srcIMG = document.getElementById("avatar40").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar41.onclick = () => {let srcIMG = document.getElementById("avatar41").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar42.onclick = () => {let srcIMG = document.getElementById("avatar42").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar43.onclick = () => {let srcIMG = document.getElementById("avatar43").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar44.onclick = () => {let srcIMG = document.getElementById("avatar44").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar45.onclick = () => {let srcIMG = document.getElementById("avatar45").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar46.onclick = () => {let srcIMG = document.getElementById("avatar46").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar47.onclick = () => {let srcIMG = document.getElementById("avatar47").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar48.onclick = () => {let srcIMG = document.getElementById("avatar48").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar49.onclick = () => {let srcIMG = document.getElementById("avatar49").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
	avatar50.onclick = () => {let srcIMG = document.getElementById("avatar50").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; updateContato()};
};



