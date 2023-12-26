# Função construtora (new)

```javascript
function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const id = 12123
    const metodoPrivado = () => {
        
    }
    //Atributos e Metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Carlos', 'Wylliam')
//new é um construtor, ele cria um objeto vázio
//Pessoa é a função construtora
//o new se referencia a pessoa

const p2 = new Pessoa('Nome2','Sobrenome2')
```

por convenção iniciamos uma função construtora sempre com uma letra maiuscula, o new cria um objeto vázio.
