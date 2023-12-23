// IIFE - Imediately invoked function expression

function qualquerCoisa () {
    console.log('qualquer coisa')
}

qualquerCoisa()

// -----------------------------
// uma função que é imediatamente invocada e que não toca o escopo global

(function () {
    console.log("não toco o escopo global e sou uma função anonima")
})();

// -----------------------------
const nome = 'Luiz'

function falaNome () {
    console.log(nome)
}

falaNome()

// -----------------------------
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