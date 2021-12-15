// Função de leitura do input
const leituraNumeros = () =>{
    let valorDeEntrada = document.getElementById('insert')
    let entrada = valorDeEntrada.value
    let entradaString = entrada.toString()
    let saida = entradaString.split("")

    // Array contendo os valores
    let numeros = []
    // criação dos novos números
    let novoNumero = ""

    for(let i = 0; i <= entradaString.length; i++){
        if(parseInt(saida[i]) == parseInt(saida[i - 1]) + 1){
            if(novoNumero != ""){
                novoNumero += saida[i]
            }else{
                novoNumero += saida[i - 1] + saida[i]
            }
        }else if(parseInt(saida[i]) == 0 && saida[i - 1] == 9){
            if(novoNumero != ""){
                novoNumero += saida[i]
            }else{
                novoNumero += saida[i - 1] + saida[i]
            }
        }else{
            numeros.push(novoNumero)
            novoNumero = ""
        }
    }

    // Verificação se tem algum valor digitado
    if(numeros == ""){
        alert("Digite algum valor no campo solicitado")
    }

    // Limpar input
    valorDeEntrada.value = ""

    numeros.sort((a, b) => b - a)

    // Verificação se possui números consecutivos
    if(!numeros[0]){
        alert('O valor informado não possui números consecutivos')
    }
            
    return valorConsecutivo.innerHTML = `${numeros[0]}`   
}

// Botão de verificação
let buttonVerification = document.querySelector('.verification')

// print da informação do valor
let valorConsecutivo = document.querySelector('.value')

buttonVerification.addEventListener('click', leituraNumeros)
