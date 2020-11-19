<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Bicycle Shop - Impulsionando sua bike!</title>

        <link rel="stylesheet" href="./public/css/global.css">
        <link rel="stylesheet" href="./public/css/menuRodape.css">
        <link rel="stylesheet" href="./public/css/produtos.css">
        <link rel="stylesheet" href="./public/css/detalhesProduto.css">
        <link rel="stylesheet" href="./public/css/lojas.css">
        <link rel="stylesheet" href="./public/css/contatos.css">
    </head>
    <body>
        <!-- 
            Início do menu
        -->
        <nav class="menu">
            <ul class="opcoesMenu">
                <li class="disporEmLinha">
                    <a href="index.html"><img src="./public/img/logo.png" alt="Logomarca Bicycle Shop" title="Bicycle Shop - Impulsionando sua bike!"></a>
                </li>
                <li class="disporEmLinha">
                    <a href="produtos.html">Produtos</a>
                </li>
                <li class="disporEmLinha">
                    <a href="lojas.html">Nossas lojas</a>
                </li>
                <li class="disporEmLinha">
                    <a href="contatos.html">Fale conosco</a>
                </li>
                <li class="disporEmLinha">
                    <a href="carrinho.html"><img src="./public/img/carrinho2.png" alt="Carrinho de compras"
                            title="Seu carrinho de compras"></a>
                </li>
            </ul>
        </nav>
        <!-- Fim do menu -->

        <?php
            $servidor = "127.0.0.1";
            $usuario = "root";
            $senha = "dbtoor";
            $banco = "bicycleshop";

            $conect = mysqli_connect($servidor, $usuario, $senha, $banco);
            if(isset($_POST['enviar'])){
                $nome = $_POST['nome'];
                $endereco = $_POST['endereco'];
                $fone = $_POST['fone'];
                $produto = $_POST['produto'];
                $preco = $_POST['preco'];
                $precofinal = $_POST['precofinal'];
                $quantidade = $_POST['quantidade'];
                
                $sql = "insert into pedido values(null,'$nome', '$endereco', '$fone', '$produto', '$preco', $quantidade, '$precofinal' )";
                mysqli_query($conect, $sql);

            }
        ?>

        <form action="pedido.php" method="post">
            <label for="nome">Digite seu nome</label>
            <input type="text" name="nome" id="nome_id">
            <label for="endereco">Seu endereço</label>
            <input type="text" name="endereco" id="endereco_id">
            <label for="fone">Telefone</label>
            <input type="number" name="fone" id="fone_id">
            <label for="produto">Qual produto você esta comprando?</label>
            <input type="text" name="produto" id="produto_id">
            <label for="preco">Valor</label>
            <input type="number" name="preco" id="precoid">
            <label for="precofinal">Valor final</label>
            <input type="number" name="precofinal" id="precofinalid">
            <label for="quantidade">Quantidade</label>
            <input type="number" name="quantidade" id="quantidade_id">
            <input type="submit" name="enviar" value="enviar">
        </form>

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