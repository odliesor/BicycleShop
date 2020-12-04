<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Produtos - Bicycle Shop</title>

        <link rel="stylesheet" href="./public/css/global.css">
        <link rel="stylesheet" href="./public/css/menuRodape.css">
        <link rel="stylesheet" href="./public/css/produtos.css">
        <link rel="stylesheet" href="./public/css/detalhesProduto.css">
        <link rel="stylesheet" href="./public/css/lojas.css">
        <link rel="stylesheet" href="./public/css/contatos.css">

        <script src="./public/js/produtos.js"></script>
        <script src="./public/js/detalhes-do-produto.js"></script>
    </head>
    <body  onload="getValor()">
        <!-- 
            Início do menu
        -->
        <nav class="menu">
            <ul class="opcoesMenu">
                <li class="disporEmLinha">
                    <a href="index.html"><img src="./public/img/logo.png" alt="Logomarca Bicycle Shop" title="Bicycle Shop - Impulsionando sua bike!"></a>
                </li>
                <li class="disporEmLinha">
                    <a href="produtos.php">Produtos</a>
                </li>
                <li class="disporEmLinha">
                    <a href="lojas.html">Nossas lojas</a>
                </li>
                <li class="disporEmLinha">
                    <a href="contatos.html">Fale conosco</a>
                </li>
                <li class="disporEmLinha">
                    <a href="carrinho.html"><img src="./public/img/carrinho2.png" alt="Carrinho de compras" title="Seu carrinho de compras"></a>
                </li>
            </ul>
        </nav>
        <!-- Fim do menu -->

        <!-- Cabeçalho semântico -->
        <header>
            <h2>Produtos</h2>
        </header>

        <hr>

        <!-- Inicio do conteúdo principal (semântico) da página -->
        <main>
            <div class="caixaFlexivel">
                <section class="area-categoria">
                    <h3>Categoria</h3>
                    <ul>
                        <!-- Lista não ordenada com as categorias de produtos do web-site -->
                        <li onclick="exibir_todos('todos')">Todos (19)</li>
                        <li onclick="exibir_categoria('componente')">Componentes (8)</li>
                        <li onclick="exibir_categoria('acessorio')">Acessórios (3)</li>
                        <li onclick="exibir_categoria('ferramenta')">Ferramentas (2)</li>
                        <li onclick="exibir_categoria('transmissao')">Transmissão (3)</li>
                        <li onclick="exibir_categoria('servico')">Serviços (3)</li>
                    </ul>
                </section>

                <section class="area-produtos">
                    <ul class="justifica">
                        <?php
                            $servidor   = "127.0.0.1";
                            $usuario    = "root";
                            $senha      = "dbtoor";
                            $banco      = "bicycleshop";

                            $conect = mysqli_connect($servidor, $usuario, $senha, $banco);
                            $resultado = mysqli_query($conect, "SELECT * FROM produto");
                            while($linha = mysqli_fetch_assoc($resultado)){
                                
                            
                        ?>
                        <li class="box-produto" id="<?php echo $linha['categoria']; ?>" onmouseover="destaca_produto(this)" onmouseout="normaliza_produto(this)">
                            <div>
                                <a href="<?php echo $linha['url_page_detalhes']; ?>">
                                    <img class="imagem_destaca" src="./public/img/<?php echo $linha['imagem']; ?>" alt="<?php echo $linha['descricao']; ?>" title="<?php echo $linha['descricao']; ?>" onmouseover="destaca_img(this)" onmouseout="normaliza_img(this)">
                                </a>
                            </div>

                            <p><?php echo $linha['descricao']; ?></p>
                            <hr>
                            <p class="precoTachado"><?php echo $linha['preco']; ?></p>
                            <p class="precoDeVenda"><?php echo $linha['precofinal']; ?></p>
                            <a href="detalhespedal.html"><button>Detalhes</button></a>
                            <a href="manutencao.html"><button>Comprar</button></a><br><br>
                            </li><?php } ?>
                        
                    </ul>
                </section>
            </div>
        </main>
        <!-- Fim do conteúdo principal (semântico) da página -->

        <!-- Início do rodapé-->
        <hr>
        <footer class="centralizar">
            <p id="corPagamento">Formas de pagamento</p>

            <img id="formasPagamento" src="./public/img/pagamento.png" alt="Formas de pagamento" title="Formas de pagamento">

            <p>&copy; Bicycle Shop</p> <!-- Direitos reservado -->
        </footer>
        <!-- Fim do rodapé-->
    </body>
</html>