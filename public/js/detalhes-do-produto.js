const produto_preco = {
    preco_selim: "20,10",
    preco_roda_livre_6veloc: "29,90",
    preco_pedal: "14,90",
    preco_pedivela: "22,80",
    preco_guidao_strada: "20,90",
    preco_guidao_mk: "40,90",
    preco_garfo: "17,90",
    preco_cubo_rolam_diant: "22,30",
    preco_coroa_3vel: "21,50",
    preco_caixa_direcao: "13,50",
    preco_bomba_pedal: "18,75",
    preco_bomba_mao: "13,20",
    preco_campainha: "10,10",
    preco_adesivo: "3,50",
    preco_manopla: "10,50",
    preco_bagageiro: "36,70",
    preco_revisao_basica: "54,50",
    preco_revisao_completa: "93,50",
    preco_alinha_rodas: "25,50"
};

let mostra = true;

function verifica_cep(){
    let formato_de_cep = /^[0-9]{8}$/;
    let cep = document.getElementById("cep").value;
    if(formato_de_cep.test(cep)){
        switch(cep){
            case "57800000":
            case "57800959":
            case "57800970":
            case "57810000":
                let uniao = document.getElementById("resposta_do_frete").innerHTML = "<table><th>Endereço:</th><td>União dos Palmares-AL</td></tr><tr><th>Frete:</th><td>R$ 15,00</td></tr><tr><th>Prazo:</th><td>de 3 à 5 dias úteis</td></tr></table>";
                conteudo = document.getElementById("resposta_do_frete").style.color = "green";
                document.getElementById("cep").value = null;
                break;
            case "57830000":
            case "57830959":
            case "57830970":
                let branquinha = document.getElementById("resposta_do_frete").innerHTML = "<table><th>Endereço:</th><td>Branquinha-AL</td></tr><tr><th>Frete:</th><td>R$ 20,00</td></tr><tr><th>Prazo:</th><td>de 5 à 7 dias úteis</td></tr></table>";
                conteudo = document.getElementById("resposta_do_frete").style.color = "green";
                document.getElementById("cep").value = null;
                break;
            case "57860000":
            case "57860959":
            case "57860970":
                let laje = document.getElementById("resposta_do_frete").innerHTML = "<table><th>Endereço:</th><td>São José da Laje-AL</td></tr><tr><th>Frete:</th><td>R$ 10,00</td></tr><tr><th>Prazo:</th><td>de 2 à 4 dias úteis</td></tr></table>";
                conteudo = document.getElementById("resposta_do_frete").style.color = "green";
                document.getElementById("cep").value = null;
                break;
            case "57890000":
            case "57890959":
            case "57890970":
                let ibateguara = document.getElementById("resposta_do_frete").innerHTML = "<table><th>Endereço:</th><td>Ibateguara-AL</td></tr><tr><th>Frete:</th><td>R$ 5,00</td></tr><tr><th>Prazo:</th><td>até 2 dias úteis</td></tr></table>";
                ibateguara = document.getElementById("resposta_do_frete").style.color = "green";
                document.getElementById("cep").value = null;
                break;
            default:
                let padrao = document.getElementById("resposta_do_frete").innerHTML = "<p>Que pena! Ainda não estamos entregando no seu endereço. <a href='contatos.html'> Clique aqui</a> para nos contactar.</p>";
                padrao = document.getElementById("resposta_do_frete").style.color = "red";

        }
    } else {
        alert("Formato de CEP inválido.");
    }
}

function getValor(produto_recebido){
    let produto_identificado = identifica_produto(produto_recebido);
    let preco = parseFloat(produto_identificado.replace(',', '.'));
    let preco_formatado = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    document.getElementById("valor_id").innerHTML = preco_formatado;

    if(preco >= 20){
        for(let i = 2; (preco / i) >= 10 && i < 11; i++){
            let opcoesPagamento = document.getElementById("opcoes_pagamento_id").innerHTML;
            let parcelas = (preco / i).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            opcoesPagamento += "<li>" + i + " X " + parcelas + " sem juros</li>";
            document.getElementById("opcoes_pagamento_id").innerHTML = opcoesPagamento;
            document.getElementById("opcoes_pagamento_id").style.display = "none";
            mostra = false;
            document.getElementById("mostra_oculta_opc_pag_id").innerHTML= "Mostar mais.";
        }
    } else if(preco >= 19.995 && preco <= 19.999) {
        document.getElementById("mostra_oculta_opc_pag_id").innerHTML = "Parcelamento indisponível pra este produto.";
        document.getElementById("opcoes_pagamento_id").style.display = "none";
        mostra = true;
    } else {
        document.getElementById("mostra_oculta_opc_pag_id").style.display = "none";
        document.getElementById("opcoes_pagamento_id").style.display = "none";
        mostra = false;
    }
}

function mostra_oculta_opc_pag(){
    if(mostra){
        document.getElementById("opcoes_pagamento_id").style.display = "none";
        mostra = false;        
        document.getElementById("mostra_oculta_opc_pag_id").innerHTML= "Mostrar mais.";
    } else {
        document.getElementById("opcoes_pagamento_id").style.display = "block";
        mostra = true;
        document.getElementById("mostra_oculta_opc_pag_id").innerHTML= "Ocultar.";
    }
    
}

function identifica_produto(produto_relacionado){
    let preco_atual_produto = produto_preco;

    if(produto_relacionado == "selim"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_selim);
    } else if(produto_relacionado == "roda_livre_6veloc"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_roda_livre_6veloc);
    } else if(produto_relacionado == "pedal"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_pedal);
    } else if(produto_relacionado == "pedivela"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_pedivela);
    } else if(produto_relacionado == "guidao_strada"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_guidao_strada);
    } else if(produto_relacionado == "guidao_mk"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_guidao_mk);
    } else if(produto_relacionado == "garfo"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_garfo);
    } else if(produto_relacionado == "cubo_rolam_diant"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_cubo_rolam_diant);
    } else if(produto_relacionado == "coroa_3vel"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_coroa_3vel);
    } else if(produto_relacionado == "caixa_direcao"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_caixa_direcao);
    } else if(produto_relacionado == "bomba_pedal"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_bomba_pedal);
    } else if(produto_relacionado == "bomba_mao"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_bomba_mao);
    } else if(produto_relacionado == "campainha:"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_campainha);
    } else if(produto_relacionado == "adesivo"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_adesivo);
    } else if(produto_relacionado == "manopla"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_manopla);
    } else if(produto_relacionado == "bagageiro"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_bagageiro);
    } else if(produto_relacionado == "revisao_basica"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_revisao_basica);
    } else if(produto_relacionado == "revisao_completa"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_revisao_completa);
    } else if(produto_relacionado == "alinha_rodas"){
        preco_atual_produto = produto_preco;
        return(preco_atual_produto.preco_alinha_rodas);
    } else {
        return Error;
    }
}