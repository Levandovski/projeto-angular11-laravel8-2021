<strong>Projeto Galeria de Fotos com Laravel 8 + Angular 11</strong>
<br>
-------------------------------------------------------------------------------
<strong>Instalação:</strong>
<br>
<strong>Dependências do Laravel + PHP [COMPOSER]</strong>
<p>Executar na raiz do projeto: composer install</p>
-------------------------------------------------------------------------------
<strong>Dependências do Angular [NPM]</strong>
<p>Entrar na pasta resources/assets/meuapp</p>
<p>Executar: npm install</p>
-------------------------------------------------------------------------------
<strong>No mysql criar o banco chamado: [BANCO]</strong>
<p>posts</p>
-------------------------------------------------------------------------------
<strong>Configurando .env:</strong>
<p>DB_DATABASE=posts (Banco criado acima)</p>
<p>DB_USERNAME=root (Usuário do mysql)</p>
<p>DB_PASSWORD=  (Senha do Mysql)</p>
-------------------------------------------------------------------------------
<strong>Executar as funções abaixo na pasta raiz do projeto (LARAVEL)</strong>
<!--<p>php artisan make:model Post -m</p>-->
<p>php artisan migrate:fresh</p>
-------------------------------------------------------------------------------
<!--<p>php artisan make:controller PostControlador --resource</p>-->
<strong>Criar o link do store para armazenamento</strong>
<p>php artisan storage:link</p>
-------------------------------------------------------------------------------

