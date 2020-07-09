
window.onload = () => {
    /* Itens localStorage */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    var db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var db_eventos = JSON.parse(localStorage.getItem('db_eventos'));
    var db_bares = JSON.parse(localStorage.getItem('db_bares'));
    console.log(cadastroClienteLocal.eventos.conviteRecebido[0]);



    //mostrar eventos
    
        let telaEventos = document.getElementById('telaEventos');
        let texto='';
        let item;
        if (cadastroClienteLocal.eventos.conviteRecebido.length){
        for (i = 0; i < cadastroClienteLocal.eventos.conviteRecebido.length; i++) {
            for (j = 0; j < db_eventos.eventos.length; j++) {
                if (cadastroClienteLocal.eventos.conviteRecebido[i].id == db_eventos.eventos[j].id) {
                    item = db_eventos.eventos[j];
                    texto += `<div class="item">
                    <div class="card">
                        <div class="img-square-wrapper">
                            <a href="/build/evento-detalhe.html?id=${item.id}"><img src="${item.icone}" alt="" ></a>
                        </div>
                        <a class="card-footer" href="/build/evento-detalhe.html?id=${item.id}">${item.nome}</a>
                    </div>
                </div>`;
                }
            }
        }
    }
    if (cadastroClienteLocal.eventos.cadastrados.length){
        for(i=0; i<cadastroClienteLocal.eventos.cadastrados.length;i++){
            console.log(cadastroClienteLocal.eventos.cadastrados.length)
            for(j=0; j<db_eventos.eventos.length; j++){
               
                if(cadastroClienteLocal.eventos.cadastrados[i].id == db_eventos.eventos[j].id && item.id !=db_eventos.eventos[j].id){
                    item = db_eventos.eventos[j];
                    texto = texto + `<div class="item">
                    <div class="card">
                        <div class="img-square-wrapper">
                            <a href="/build/evento-detalhe.html?id=${item.id}"><img src="${item.icone}" alt="" ></a>
                        </div>
                        <a class="card-footer" href="/build/evento-detalhe.html?id=${item.id}">${item.nome}</a>
                    </div>
                </div>`;
                }
            }
        }
    }
    if (texto){
        telaEventos.innerHTML = texto
    }


    //mostrar bares
    if (db_bares.data.length) {
        let telaBares = document.getElementById('telaEstabelecimentos');
        let texto = '';
        let item;
        for (i = 0; i < db_bares.data.length; i++) {
            item = db_bares.data[i];
            texto += `<div class="col-12 col-md-6" >
      <div class="card mb-3 card-bar">
      <a href="perfil-comercio.html?id=${item.id}">
          <div class="row no-gutters global-wrapper">
              <div class="col-4 img-square-wrapper">
                  <img src="https://loremflickr.com/400/300/pub,beer,party?ramdom=${item.id}" class="card-img" alt="...">
              </div>
              <div class="col-8">
                  <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">
                          <small class="text-muted">
                              ★ 4.5 • $$ • 3km
                          </small>
                      </p>
                  </div>
              </div>
          </div>
           </a>
      </div>
  </div>`
        }
        telaBares.innerHTML = texto;
    }

    //carousel
    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            767: {
                items: 5
            },
            1000: {
                items: 7
            }
        }
    })
}
