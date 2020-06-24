
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

	/* Editar cadastroClienteLocal */
	let cadastroClienteLocal = JSON.parse(localStorage.getItem("db_user.usuarios"));
	
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
			localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))
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
			localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))
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
			localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))
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
			localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))
		};
	};


	btnCep.onclick = () => { //Ainda não altera no perfil os dados do endereço
		if(cep.disabled) {
			cep.disabled = false;
			document.getElementById("btnCepImg").src = "0-imgs/icont/confirmar.png";
		} else {
			cep.disabled = true;
			document.getElementById("btnCepImg").src = "0-imgs/icont/editar.png";
			cadastroClienteLocal.cep = cep.value;
			localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))
		};
	};


	/* Editar preferências */
	let preferenciasClienteLocal = JSON.parse(localStorage.getItem("preferenciasClienteLocal"));

	/* categorias de estabelecimentos */
	document.getElementById("boate").checked = preferenciasClienteLocal.categorias.boate;
	document.getElementById("buteco").checked = preferenciasClienteLocal.categorias.buteco;
	document.getElementById("churrascaria").checked = preferenciasClienteLocal.categorias.churrascaria;
	document.getElementById("restaurante").checked = preferenciasClienteLocal.categorias.restaurante;
	document.getElementById("burgueria").checked = preferenciasClienteLocal.categorias.burgueria;

	boate.onchange = () => {
		preferenciasClienteLocal.categorias.boate = document.getElementById("boate").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};
	buteco.onchange = () => {
		preferenciasClienteLocal.categorias.buteco = document.getElementById("buteco").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};
	churrascaria.onchange = () => {
		preferenciasClienteLocal.categorias.churrascaria = document.getElementById("churrascaria").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};
	restaurante.onchange = () => {
		preferenciasClienteLocal.categorias.restaurante = document.getElementById("restaurante").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};
	burgueria.onchange = () => {
		preferenciasClienteLocal.categorias.burgueria = document.getElementById("burgueria").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};



	/* culinárias */
	document.getElementById("brasileira").checked = preferenciasClienteLocal.culinarias.brasileira;
	document.getElementById("italiana").checked = preferenciasClienteLocal.culinarias.italiana;
	document.getElementById("alema").checked = preferenciasClienteLocal.culinarias.alema;
	document.getElementById("japonesa").checked = preferenciasClienteLocal.culinarias.japonesa;
	document.getElementById("pizza").checked = preferenciasClienteLocal.culinarias.pizza;

	brasileira.onchange = () => {
		preferenciasClienteLocal.culinarias.brasileira = document.getElementById("brasileira").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};

	italiana.onchange = () => {
		preferenciasClienteLocal.culinarias.italiana = document.getElementById("italiana").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};

	alema.onchange = () => {
		preferenciasClienteLocal.culinarias.alema = document.getElementById("alema").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};

	japonesa.onchange = () => {
		preferenciasClienteLocal.culinarias.japonesa = document.getElementById("japonesa").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
	};

	pizza.onchange = () => {
		preferenciasClienteLocal.culinarias.pizza = document.getElementById("pizza").checked;
		localStorage.setItem("preferenciasClienteLocal", JSON.stringify(preferenciasClienteLocal))
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

	avatar01.onclick = () => {let srcIMG = document.getElementById("avatar01").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar02.onclick = () => {let srcIMG = document.getElementById("avatar02").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar03.onclick = () => {let srcIMG = document.getElementById("avatar03").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar04.onclick = () => {let srcIMG = document.getElementById("avatar04").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar05.onclick = () => {let srcIMG = document.getElementById("avatar05").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar06.onclick = () => {let srcIMG = document.getElementById("avatar06").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar07.onclick = () => {let srcIMG = document.getElementById("avatar07").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar08.onclick = () => {let srcIMG = document.getElementById("avatar08").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar09.onclick = () => {let srcIMG = document.getElementById("avatar09").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar10.onclick = () => {let srcIMG = document.getElementById("avatar10").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar11.onclick = () => {let srcIMG = document.getElementById("avatar11").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar12.onclick = () => {let srcIMG = document.getElementById("avatar12").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar13.onclick = () => {let srcIMG = document.getElementById("avatar13").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar14.onclick = () => {let srcIMG = document.getElementById("avatar14").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar15.onclick = () => {let srcIMG = document.getElementById("avatar15").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar16.onclick = () => {let srcIMG = document.getElementById("avatar16").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar17.onclick = () => {let srcIMG = document.getElementById("avatar17").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar18.onclick = () => {let srcIMG = document.getElementById("avatar18").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar19.onclick = () => {let srcIMG = document.getElementById("avatar19").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar20.onclick = () => {let srcIMG = document.getElementById("avatar20").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar21.onclick = () => {let srcIMG = document.getElementById("avatar21").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar22.onclick = () => {let srcIMG = document.getElementById("avatar22").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar23.onclick = () => {let srcIMG = document.getElementById("avatar23").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar24.onclick = () => {let srcIMG = document.getElementById("avatar24").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar25.onclick = () => {let srcIMG = document.getElementById("avatar25").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar26.onclick = () => {let srcIMG = document.getElementById("avatar26").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar27.onclick = () => {let srcIMG = document.getElementById("avatar27").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar28.onclick = () => {let srcIMG = document.getElementById("avatar28").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar29.onclick = () => {let srcIMG = document.getElementById("avatar29").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar30.onclick = () => {let srcIMG = document.getElementById("avatar30").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar31.onclick = () => {let srcIMG = document.getElementById("avatar31").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar32.onclick = () => {let srcIMG = document.getElementById("avatar32").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar33.onclick = () => {let srcIMG = document.getElementById("avatar33").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar34.onclick = () => {let srcIMG = document.getElementById("avatar34").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar35.onclick = () => {let srcIMG = document.getElementById("avatar35").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar36.onclick = () => {let srcIMG = document.getElementById("avatar36").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar37.onclick = () => {let srcIMG = document.getElementById("avatar37").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar38.onclick = () => {let srcIMG = document.getElementById("avatar38").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar39.onclick = () => {let srcIMG = document.getElementById("avatar39").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar40.onclick = () => {let srcIMG = document.getElementById("avatar40").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar41.onclick = () => {let srcIMG = document.getElementById("avatar41").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar42.onclick = () => {let srcIMG = document.getElementById("avatar42").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar43.onclick = () => {let srcIMG = document.getElementById("avatar43").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar44.onclick = () => {let srcIMG = document.getElementById("avatar44").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar45.onclick = () => {let srcIMG = document.getElementById("avatar45").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar46.onclick = () => {let srcIMG = document.getElementById("avatar46").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar47.onclick = () => {let srcIMG = document.getElementById("avatar47").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar48.onclick = () => {let srcIMG = document.getElementById("avatar48").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar49.onclick = () => {let srcIMG = document.getElementById("avatar49").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
	avatar50.onclick = () => {let srcIMG = document.getElementById("avatar50").src; document.getElementById("perfilAvatar").src = srcIMG; cadastroClienteLocal.avatar = srcIMG; localStorage.setItem("cadastroClienteLocal", JSON.stringify(cadastroClienteLocal))};
};



