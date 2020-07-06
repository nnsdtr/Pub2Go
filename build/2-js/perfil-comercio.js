onload = () => {

	/* Pegar a referencia do array usuarios no db */
	let db_bares = JSON.parse(localStorage.getItem('db_bares'));

  let nome = db_bares.data["0"].nome;
  let endereco = db_bares.data["0"].logradouro + ", " + db_bares.data["0"].numeroLocal + " - " + db_bares.data["0"].bairro + ", " + db_bares.data["0"].cidade + " - " + db_bares.data["0"].estado + ", " + db_bares.data["0"].cep;
  let telefone = db_bares.data["0"].telefone;


  let nomeBar = document.getElementById('nome');
  let enderecoBar = document.getElementById('endereco');
  let telefoneBar = document.getElementById('telefone');

  nomeBar.innerText = nome;
  enderecoBar.innerText = endereco;
  telefoneBar.innerText = telefone;

}