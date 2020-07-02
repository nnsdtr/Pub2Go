window.onload = () => {
    /*Pegando dados do db*/
    let db_users = JSON.parse(localStorage.getItem('db_users'));
    let usuarioCorrente = JSON.parse(sessionStorage.getItem('db_users'));

    /*Função para executar pesquisa*/
    campoPesquisa.onkeyup = () => {
        let valor = campoPesquisa.value.toLowerCase();
        let divTela = document.getElementById('telaPesquisa');
        let texto = '';
        let usuario = '';
        for (i = 0; i < db_users.usuarios.length; i++) {
            usuario = db_users.usuarios[i];
            nomeSobrenome = usuario.nome + " " + usuario.sobrenome;
            if (usuario.nome.toLowerCase().indexOf(valor) != -1 || usuario.sobrenome.toLowerCase().indexOf(valor) != -1 || usuario.email.toLowerCase().indexOf(valor) != -1 || nomeSobrenome.toLowerCase().indexOf(valor) != -1 && valor!=' ') {
                texto += `  <div class="row card-PesquisaAmigos">
                <div class="col-3">
                    <img src="${usuario.avatar}" alt="">
                </div>
                <div class="col-6">
                    <h4>${usuario.nome} ${usuario.sobrenome}</h4>
                    <p>${usuario.email}</p>
                </div>
                <div class="col-3">
                    <button id='${usuario.id}'>Adicionar</button>
                </div>
            </div>`;
            }
        }
        if (valor ==''){
            texto= ' '
        }
        divTela.innerHTML = texto;
    }
}
