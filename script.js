function gerarCodigos(){
    
    const min = Math.ceil(document.querySelector(".luck1").value)
    const max =  Math.floor(document.querySelector(".luck2").value)
    
    const result =  Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}