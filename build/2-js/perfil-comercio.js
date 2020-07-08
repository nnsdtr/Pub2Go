onload = () => {

	/* Pegar a referencia do array usuarios no db */
	let db_bares = JSON.parse(localStorage.getItem('db_bares'));
   //pegando id na url
   var url=window.location.search.replace("?", "").split("=");
   var idBar = url[1];
   var posicaoArray;
   for (let i=0;i<db_bares.data.length; i++){
     if (idBar == db_bares.data[i].id){
        posicaoArray= i;
     }
   }


  let nome = db_bares.data[posicaoArray].nome;
  let endereco = db_bares.data[posicaoArray].logradouro + ", " + db_bares.data[posicaoArray].numeroLocal + " - " + db_bares.data[posicaoArray].bairro + ", " + db_bares.data[posicaoArray].cidade + " - " + db_bares.data[posicaoArray].estado + ", " + db_bares.data[posicaoArray].cep;
  let telefone = db_bares.data[posicaoArray].telefone;


  let nomeBar = document.getElementById('nome');
  let enderecoBar = document.getElementById('endereco');
  let telefoneBar = document.getElementById('telefone');
  caracteristicas = db_bares.data[posicaoArray].caracteristicas
  document.getElementById("brasileira").checked = caracteristicas.culinarias.brasileira;
  document.getElementById("italiana").checked = caracteristicas.culinarias.italiana; 
  document.getElementById("alema").checked = caracteristicas.culinarias.alema;
  document.getElementById("japonesa").checked = caracteristicas.culinarias.japonesa;
  document.getElementById("pizza").checked = caracteristicas.culinarias.pizza;
  document.getElementById("boate").checked = caracteristicas.tipoDoBar.boate;
document.getElementById("buteco").checked = caracteristicas.tipoDoBar.buteco;
document.getElementById("churrascaria").checked = caracteristicas.tipoDoBar.churrascaria;
document.getElementById("restaurante").checked = caracteristicas.tipoDoBar.restaurante;
document.getElementById("burgueria").checked = caracteristicas.tipoDoBar.burgueria;

  nomeBar.innerText = nome;
  enderecoBar.innerText = endereco;
  telefoneBar.innerText = telefone;
}