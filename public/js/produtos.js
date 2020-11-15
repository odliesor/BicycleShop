function exibir_categoria(categoria){
    let elemento = document.getElementsByClassName("box-produto");
    console.log(elemento.length);
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

let destaque = (imagem) => {
    imagem.style.height = "180px";
    // imagem.style.padding = "20px 0px 0px 0px";
    // imagem.height = 550;
    // console.log(imagem)
}

let normal = (imagem) => {
    imagem.style.height = "160px";
    // imagem.style.padding = "0px";
}