SPRINT 4
========

Nesta sprint foi realizada a intengração da API https://viacep.com.br nas páginas do perfil do cliente e no cadastro de comércio, bem
como o bloqueio para usuários menores de 18 anos.

Nas páginas, inputs relacionados fornecem o valor do CEP, o qual é passado para o JavaScript realizar a transação assíncrona
com o ViaCEP por meio do XMLHttpRequest. Desse modo, configuramos o JavaScript para que, com o retorno da informação pelo web
service, preencha automaticamente os campos de logradouro, complemento (se houver), bairro, cidade e unidade federativa.
Adicionamos também uma verificação para CEPs inválidos, que além de alertá-lo sobre a invalidade, bloqueia o formulário,
impedindo que o mesmo seja enviado, garantindo a integridade das informações listadas do usuário.

Além disso, foi feito o bloqueio de usuários menores de idade, pendência falada durante as apresentações da última semana.


SPRINT 5
========

Para a próxima sprint, pretendemos adicionar um banco de dados (em objetos JSON) para múltiplos clientes e um para múltiplos
estabelecimentos. A razão disso é possibilitar que tenhamos informações estruturadas dos clientes e estabelecimentos para
possibilitar um acesso centralizado e facilitado de suas informações. Isso será fundamental, pois é a base de outras funcionalidades
que pretendemos começar a entregar nessa mesma SPRINT, como filtragem de estabelecimentos (por categoria, por exemplo), buscas dos
amigos do cliente, base para estabelecimentos favoritos, eventos disponíveis, entre outros.


- perfil do estabelecimento (similar ao perfil do cliente)
- 