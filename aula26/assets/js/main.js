const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e){
    e.preventDefault()
    const inputPeso = e.target.querySelector("#peso")
    const inputAltura = e.target.querySelector("#altura")

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false)
        return
    }

    if (!altura) {
        setResultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu imc é ${imc} (${nivelImc})`
    setResultado(msg, true)
    
    console.log(imc, nivelImc)
})

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    const resultado = imc >= 39.9 ? nivel[5] : 
                      imc >= 34.9 ? nivel[4] :
                      imc >= 29.9 ? nivel[3] :
                      imc >= 24.9 ? nivel[2] :
                      imc >= 18.5 ? nivel[1] : nivel[0]
    
    return resultado
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

function criaP () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    
    const p = criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg
    resultado.appendChild(p)
}