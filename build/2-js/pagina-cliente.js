
window.onload = () =>{
	/* Itens localStorage */
    var cadastroClienteLocal = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
    var db_cliente = JSON.parse(localStorage.getItem('db_users'));
    var db_eventos = JSON.parse(localStorage.getItem('db_eventos'));
    console.log(cadastroClienteLocal.eventos.conviteRecebido[0])
   
   //mostrar eventos
    if (cadastroClienteLocal.eventos.conviteRecebido.length){
        let telaEventos = document.getElementById('telaEventos');
        let texto ='';
        let item;
        for(i=0;i<cadastroClienteLocal.eventos.conviteRecebido.length; i++){
            for(j=0; j<db_eventos.eventos.length;j++){
                if (cadastroClienteLocal.eventos.conviteRecebido[i].id==db_eventos.eventos[j].id){
                    item = db_eventos.eventos[j];
                    texto+= `<div class="item">
                    <div class="card">
                        <div class="img-square-wrapper">
                            <a href="/build/evento-detalhe.html?id=${item.id}"><img src="${item.icone}" alt="" ></a>
                        </div>
                        <a class="card-footer" href="/build/evento-detalhe.html?id=${item.id}">${item.descricao}</a>
                    </div>
                </div>`;
                }
            }
            telaEventos.innerHTML=texto
        }
    }

    //carousel
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            767:{
                items:5
            },
            1000:{
                items:7
            }
        }
    })
}
