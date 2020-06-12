
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

/**/




window.onload = () => {

	/* Editar cadastro */
	let cadastro = JSON.parse(localStorage.getItem("cadastro"));
	document.getElementById("email").value = cadastro.email;
	document.getElementById("nome").value = cadastro.nome;
	document.getElementById("sobrenome").value = cadastro.sobrenome;
	document.getElementById("telefone").value = cadastro.telefone;
	document.getElementById("senha").value = cadastro.senha;
	document.getElementById("anonascimento").value = cadastro.anonascimento;
	document.getElementById("endereco").value = cadastro.endereco;
	document.getElementById("cidade").value = cadastro.cidade;
	document.getElementById("estado").value = cadastro.estado;
	document.getElementById("cep").value = cadastro.cep;
	document.getElementById("perfilAvatar").src = cadastro.avatar;

	btnNome.onclick = () => {
		if(nome.disabled) {
			nome.disabled = false;
			document.getElementById("btnNomeImg").src = "0-imgs/icont/confirmar.png";
		} else {
			nome.disabled = true;
			document.getElementById("btnNomeImg").src = "0-imgs/icont/editar.png";
			cadastro.nome = nome.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnSobrenome.onclick = () => {
		if(sobrenome.disabled) {
			sobrenome.disabled = false;
			document.getElementById("btnSobrenomeImg").src = "0-imgs/icont/confirmar.png";
		} else {
			sobrenome.disabled = true;
			document.getElementById("btnSobrenomeImg").src = "0-imgs/icont/editar.png";
			cadastro.sobrenome = sobrenome.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnTelefone.onclick = () => {
		if(telefone.disabled) {
			telefone.disabled = false;
			document.getElementById("btnTelefoneImg").src = "0-imgs/icont/confirmar.png";
		} else {
			telefone.disabled = true;
			document.getElementById("btnTelefoneImg").src = "0-imgs/icont/editar.png";
			cadastro.telefone = telefone.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnSenha.onclick = () => {
		if(senha.disabled) {
			senha.disabled = false;
			document.getElementById("btnSenhaImg").src = "0-imgs/icont/confirmar.png";
		} else {
			senha.disabled = true;
			document.getElementById("btnSenhaImg").src = "0-imgs/icont/editar.png";
			cadastro.senha = senha.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnNascimento.onclick = () => {
		if(anonascimento.disabled) {
			anonascimento.disabled = false;
			document.getElementById("btnNascimentoImg").src = "0-imgs/icont/confirmar.png";
		} else {
			anonascimento.disabled = true;
			document.getElementById("btnNascimentoImg").src = "0-imgs/icont/editar.png";
			cadastro.anonascimento = anonascimento.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnEndereco.onclick = () => {
		if(endereco.disabled) {
			endereco.disabled = false;
			document.getElementById("btnEnderecoImg").src = "0-imgs/icont/confirmar.png";
		} else {
			endereco.disabled = true;
			document.getElementById("btnEnderecoImg").src = "0-imgs/icont/editar.png";
			cadastro.endereco = endereco.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnCidade.onclick = () => {
		if(cidade.disabled) {
			cidade.disabled = false;
			document.getElementById("btnCidadeImg").src = "0-imgs/icont/confirmar.png";
		} else {
			cidade.disabled = true;
			document.getElementById("btnCidadeImg").src = "0-imgs/icont/editar.png";
			cadastro.cidade = cidade.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnEstado.onclick = () => {
		if(estado.disabled) {
			estado.disabled = false;
			document.getElementById("btnEstadoImg").src = "0-imgs/icont/confirmar.png";
		} else {
			estado.disabled = true;
			document.getElementById("btnEstadoImg").src = "0-imgs/icont/editar.png";
			cadastro.estado = estado.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};

	btnCep.onclick = () => {
		if(cep.disabled) {
			cep.disabled = false;
			document.getElementById("btnCepImg").src = "0-imgs/icont/confirmar.png";
		} else {
			cep.disabled = true;
			document.getElementById("btnCepImg").src = "0-imgs/icont/editar.png";
			cadastro.cep = cep.value;
			localStorage.setItem("cadastro", JSON.stringify(cadastro))
		};
	};


	/* Editar preferências */
	let preferencias = JSON.parse(localStorage.getItem("preferencias"));

	/* categorias de estabelecimentos */
	document.getElementById("boate").checked = preferencias.categorias.boate;
	document.getElementById("buteco").checked = preferencias.categorias.buteco;
	document.getElementById("churrascaria").checked = preferencias.categorias.churrascaria;
	document.getElementById("restaurante").checked = preferencias.categorias.restaurante;
	document.getElementById("burgueria").checked = preferencias.categorias.burgueria;

	boate.onchange = () => {
		preferencias.categorias.boate = document.getElementById("boate").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};
	buteco.onchange = () => {
		preferencias.categorias.buteco = document.getElementById("buteco").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};
	churrascaria.onchange = () => {
		preferencias.categorias.churrascaria = document.getElementById("churrascaria").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};
	restaurante.onchange = () => {
		preferencias.categorias.restaurante = document.getElementById("restaurante").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};
	burgueria.onchange = () => {
		preferencias.categorias.burgueria = document.getElementById("burgueria").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};



	/* culinárias */
	document.getElementById("brasileira").checked = preferencias.culinarias.brasileira;
	document.getElementById("italiana").checked = preferencias.culinarias.italiana;
	document.getElementById("alema").checked = preferencias.culinarias.alema;
	document.getElementById("japonesa").checked = preferencias.culinarias.japonesa;
	document.getElementById("pizza").checked = preferencias.culinarias.pizza;

	brasileira.onchange = () => {
		preferencias.culinarias.brasileira = document.getElementById("brasileira").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};

	italiana.onchange = () => {
		preferencias.culinarias.italiana = document.getElementById("italiana").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};

	alema.onchange = () => {
		preferencias.culinarias.alema = document.getElementById("alema").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};

	japonesa.onchange = () => {
		preferencias.culinarias.japonesa = document.getElementById("japonesa").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
	};

	pizza.onchange = () => {
		preferencias.culinarias.pizza = document.getElementById("pizza").checked;
		localStorage.setItem("preferencias", JSON.stringify(preferencias))
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

	avatar01.onclick = () => {let srcIMG = document.getElementById("avatar01").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar02.onclick = () => {let srcIMG = document.getElementById("avatar02").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar03.onclick = () => {let srcIMG = document.getElementById("avatar03").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar04.onclick = () => {let srcIMG = document.getElementById("avatar04").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar05.onclick = () => {let srcIMG = document.getElementById("avatar05").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar06.onclick = () => {let srcIMG = document.getElementById("avatar06").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar07.onclick = () => {let srcIMG = document.getElementById("avatar07").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar08.onclick = () => {let srcIMG = document.getElementById("avatar08").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar09.onclick = () => {let srcIMG = document.getElementById("avatar09").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar10.onclick = () => {let srcIMG = document.getElementById("avatar10").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar11.onclick = () => {let srcIMG = document.getElementById("avatar11").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar12.onclick = () => {let srcIMG = document.getElementById("avatar12").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar13.onclick = () => {let srcIMG = document.getElementById("avatar13").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar14.onclick = () => {let srcIMG = document.getElementById("avatar14").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar15.onclick = () => {let srcIMG = document.getElementById("avatar15").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar16.onclick = () => {let srcIMG = document.getElementById("avatar16").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar17.onclick = () => {let srcIMG = document.getElementById("avatar17").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar18.onclick = () => {let srcIMG = document.getElementById("avatar18").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar19.onclick = () => {let srcIMG = document.getElementById("avatar19").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar20.onclick = () => {let srcIMG = document.getElementById("avatar20").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar21.onclick = () => {let srcIMG = document.getElementById("avatar21").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar22.onclick = () => {let srcIMG = document.getElementById("avatar22").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar23.onclick = () => {let srcIMG = document.getElementById("avatar23").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar24.onclick = () => {let srcIMG = document.getElementById("avatar24").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar25.onclick = () => {let srcIMG = document.getElementById("avatar25").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar26.onclick = () => {let srcIMG = document.getElementById("avatar26").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar27.onclick = () => {let srcIMG = document.getElementById("avatar27").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar28.onclick = () => {let srcIMG = document.getElementById("avatar28").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar29.onclick = () => {let srcIMG = document.getElementById("avatar29").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar30.onclick = () => {let srcIMG = document.getElementById("avatar30").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar31.onclick = () => {let srcIMG = document.getElementById("avatar31").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar32.onclick = () => {let srcIMG = document.getElementById("avatar32").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar33.onclick = () => {let srcIMG = document.getElementById("avatar33").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar34.onclick = () => {let srcIMG = document.getElementById("avatar34").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar35.onclick = () => {let srcIMG = document.getElementById("avatar35").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar36.onclick = () => {let srcIMG = document.getElementById("avatar36").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar37.onclick = () => {let srcIMG = document.getElementById("avatar37").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar38.onclick = () => {let srcIMG = document.getElementById("avatar38").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar39.onclick = () => {let srcIMG = document.getElementById("avatar39").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar40.onclick = () => {let srcIMG = document.getElementById("avatar40").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar41.onclick = () => {let srcIMG = document.getElementById("avatar41").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar42.onclick = () => {let srcIMG = document.getElementById("avatar42").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar43.onclick = () => {let srcIMG = document.getElementById("avatar43").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar44.onclick = () => {let srcIMG = document.getElementById("avatar44").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar45.onclick = () => {let srcIMG = document.getElementById("avatar45").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar46.onclick = () => {let srcIMG = document.getElementById("avatar46").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar47.onclick = () => {let srcIMG = document.getElementById("avatar47").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar48.onclick = () => {let srcIMG = document.getElementById("avatar48").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar49.onclick = () => {let srcIMG = document.getElementById("avatar49").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
	avatar50.onclick = () => {let srcIMG = document.getElementById("avatar50").src; document.getElementById("perfilAvatar").src = srcIMG; cadastro.avatar = srcIMG; localStorage.setItem("cadastro", JSON.stringify(cadastro))};
};



