# IIFE -> Immediately invoked function expression

## Um função fazendo o uso do escopo lexico

essa função tem acesso a várivel (escopo global) nome sem eu ter passado como argumento da função

``` javascript
const nome = 'Luiz'

function falaNome () {
    console.log(nome)
}

falaNome()
```

## IIFE

``` javascript 
(function (idade, peso, altura) {
    const sobrenome = 'Miranda'
    
    function criaNome (nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome () {
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, peso, altura)
     
})(19, 64.4, 1.78);
```