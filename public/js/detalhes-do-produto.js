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