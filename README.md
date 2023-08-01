# Funções úteis para formatações e ordenação comuns pt-br

Instalação via npm:
```shell
npm i mfm-utils
```

Importar funções:
```js
const { formatCep, formatCpf, orderPtBr } = require("mfm-utils")
```

* **formatCep(value)**
  
  Retorna uma string no formato '#####-###'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.
  
* **formatCpf(value)**
  
  Retorna uma string no formato '###.###.###-##'
  
  Caso o valor enviado não seja válido ou o número de caracteres não seja suficiente, retorna NULL.

* **orderPtBr(list, campo)**

  Enviando uma lista de objetos a ordenação será pelo parâmetro campo.

  Exemplo:

```js
  lista1 = [
      { nome: 'Mario', sobrenome: 'Metta' },
      { nome: 'Fernando', sobrenome: 'Silva' },
      { nome: 'Carlos', sobrenome: 'Miranda' }
  ]

  console.log(ordenarPtBr(lista1, 'nome'))
  // retorno:
  //   [
  //     { nome: 'Carlos', sobrenome: 'Miranda' },
  //     { nome: 'Fernando', sobrenome: 'Silva' },
  //     { nome: 'Mario', sobrenome: 'Metta' }
  //   ]
```

* **orderPtBr(list)**

  Caso envie uma lista simples, não envie o parâmetro campo.

  Exemplo:

```js
  lista2 = ['Mario', 'Fernando', 'Carlos']

  console.log(ordenarPtBr(lista2))
  // retorno:
  //   [ 'Carlos', 'Fernando', 'Mario' ]
```

  **Importante: por tratar-se de ordenação (pt-br), palavras com os acentos (agudo, circunflexo e grave), o til, o apóstrofo e a cedilha serão tratadas adequadamente.**

