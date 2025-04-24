# miniprojeto-m4
# API de Troca de Habilidades
 
A API permite que os usuários se conectem para ensinar e aprender habilidades diversas, como culinária, música, programação, entre outras. Os usuários poderão listar suas habilidades, buscar por pessoas que oferecem o que desejam aprender e visualizar detalhes sobre as habilidades oferecidas.

A proposta é mitigar a dificuldade de encontrar oportunidades de aprendizado e a falta de visibilidade para habilidades oferecidas, conectando diretamente aqueles que desejam ensinar e aprender. Ela promove a interação social e a construção de uma comunidade colaborativa, facilitando a troca de conhecimentos de forma organizada. Assim, a API contribui para um ambiente mais acessível e enriquecedor para o aprendizado.

## Funcionalidades da API
Rota GET /habilidades: Retorna uma lista de todas as habilidades disponíveis para troca.
Rota GET /oferecedores: Retorna uma lista de todos os usuários que oferecem habilidades.
Rota GET /procurar: Permite que um usuário busque por habilidades que deseja aprender.
Rota GET /habilidade/:id: Retorna detalhes sobre uma habilidade específica, incluindo quem a oferece.