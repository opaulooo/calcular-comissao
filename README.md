## API para calcular a comissão dos vendedores referente às vendas feitas, recebendo também um bônus  caso atingir a meta estipulada para o mês específico.


<br/><br/>

### Versões em minha máquina:

- npm: 8.1.0
- node: 16.13.0



<br/><br/>

### Dependências instaladas:

- npm install
- npm install --save-dev nodemon
- npm install jest
- npm install supertest



<br/><br/>

### Para iniciar a API com o nodemon, executar no console:

- npm start

<br/><br/>

### Para iniciar a API sem o nodemon, executar no console:

- npm run server
  

## Tecnologias usadas:

- NodeJS
- Express
- Jest

<br/><br/>

## Programas usados:

- Visual Studio Code
- Postman

<br/><br/>

## Testes Unitários foram feitos em:

- Rota padrão da api ('/')
- Rota de POST para o cálculo das comissões ('/calcula-comissao') 

<br/><br/>


### Para executar os Testes Unitários, executar no console:

- npm test

<br/><br/>

# Proposta a ser executada:

1 - A API precisa calcular a comissao que um vendedor deve receber, segundo a
seguinte regra:


- 1% para vendas acima até 300 reais
- 3% para vendas entre 300 e 1000 reais
- 5% para vendas acima de 1000 reais
- O vendedor receberá um adicional por atingimento de META. Se tiver atingido a meta do mês o vendedor ganha mais 3%. As metas são referentes a quantidade de vendas

<br/>

### O método vai receber um array de pedidos, através de um POST, exemplo:


POST api/calcula-comissao
{
    "pedidos": 
    [
        {
            "vendedor": 0,
            "data": "aaaa-mm-dd",
            "valor": 0
        }
    ]
}

<br/>

e o response será a comissao de cada vendedor em cada mes (xx,xx será na verdade o valor calculado):
{
    "comissoes": 
    [
        {
            "vendedor":0,
            "mes": 0,
            "valor": "0.00"
        },
        {
            "vendedor": 0,
            "mes": 0,
            "valor": "0.00"
        }
    ]
}


<br/><br/>

## BONUS: Testes de unidade


### Teste 1 - Vendedor deve receber bonus se atingir a meta

ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": 0.00
        },
        {
            "vendedor": 0,
            "mes": 0,
            "valor": 0.00
        }
    ]
}

SAIDA:
{
    "comissoes": 
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": "0.00"
        }
    ]
}


<br/><br/>

### Teste 2 - Vendedor deve não receber bonus se atingir a meta

ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": 0.00
        }
    ]
}

SAIDA:
{
    "comissoes":
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": "0.00"
        },
    ]
}


<br/><br/>

### Teste 3 - Vendedor deve receber comissao segundo a faixa

ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": 0.00
        }
    ]
}

SAIDA:
{
    "comissoes": 
    [
        {
            "vendedor": 0,
            "mes": 0,
            "valor": "0.00"
        }
    ]
}
