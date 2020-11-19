function exibir_categoria(categoria){
    let elemento = document.getElementsByClassName("box-produto");
    for(let i = 0; i < elemento.length; i++){
        if(categoria == elemento[i].id){
            elemento[i].style = "display: inline-block";
        } else {
            elemento[i].style = "display: none";
        }
    }
}

let exibir_todos = () => {
    let elemento = document.getElementsByClassName("box-produto");
    for(let i = 0; i < elemento.length; i++){
        elemento[i].style = "display: inline-block";
    }
}

let destaca_img = (imagem) => {
    imagem.style.height = "180px";
}

let normaliza_img = (imagem) => {
    imagem.style.height = "160px";    
}

let destaca_produto = (produto) => {
    produto.style.background = "LightGrey";    
}

let normaliza_produto = (produto) => {
    produto.style.background = "none";
}