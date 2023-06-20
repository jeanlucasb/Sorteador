function gerarCodigos() {

    const min = Math.ceil(document.querySelector(".luck1").value)
    const max = Math.floor(document.querySelector(".luck2").value)

    if (min >= max) {
        alert("O valor minimo tem que ser MENOR que o valor máximo")

    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)
    }

}