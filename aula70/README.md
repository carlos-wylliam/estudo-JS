# Objetos e Prototype

## Acessando as chaves por anotação de ponto e conchetes

```javascript
    const pessoa = {
        nome: 'Luiz',
        sobrenome: 'Otavio'
    };

    //Formas diferentes de acessar as propriedades do objeto
    console.log(pessoa.nome)
    console.log(pessoa['nome'])

    //Mais formas diferentes de acessar as propriedades do objeto

    const pessoa = {
        nome: 'Luiz',
        sobrenome: 'Otavio'
    }

    const chave = 'nome'
    console.log(pessoa[chave])
```

## Criando um array com construtor

```javascript
    const pessoa1 = new Object();
    pessoa1.nome = 'Carlos'
    pessoa1.sobrenome = 'Wylliam'
    pessoa1.idade = 30
    pessoa1.falarNome = function () {
        return (`{this.nome} está falando seu nome.`)
    }
```