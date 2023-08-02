# Funções úteis para formatações e ordenação comuns pt-br

Instalação via npm:
```shell
npm i mfm-utils
```

Importar funções:
```js
const { formatCep, formatCpf, orderPtBr, fDateSlash, fDateDash, fDateDashi } = require("mfm-utils")
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

* **fDateSlash()**

  Função para retornar data e hora atuais retornando 3 formatos usando barra "/" como separador:

```js
  const date = fDateSlash()
  console.log(date[0]) // 02/08/2023
  console.log(date[1]) // 02/08/2023 15:39
  console.log(date[2]) // 02/08/2023 15:39:29
```

* **fDateDash()**

  Função para retornar data e hora atuais retornando 3 formatos usando traço "-" como separador:

```js
  const date = fDateDash()
  console.log(date[0]) // 02-08-2023
  console.log(date[1]) // 02-08-2023 15:39
  console.log(date[2]) // 02-08-2023 15:39:29
```

* **fDateDashi()**

  Função para retornar data (invertida) e hora atuais retornando 3 formatos usando traço "-" como separador:

```js
  const date = fDateDashi()
  console.log(date[0]) // 2023-08-02
  console.log(date[1]) // 2023-08-02 15:39
  console.log(date[2]) // 2023-08-02 15:39:29
```

