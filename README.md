1 - A API precisa calcular a comissao que um vendedor deve receber, segundo a
seguinte regra:


- 1% para vendas acima até 300 reais
- 3% para vendas entre 300 e 1000 reais
- 5% para vendas acima de 1000 reais
- O vendedor receberá um adicional por atingimento de META. Se tiver atingido a meta do mês o vendedor ganha 
  mais 3%. As metas são referentes a quantidade de vendas e estão

abaixo:

const metas =
[
    {
        mes = 1,
        qtd = 5
    },
    {
        mes = 2,
        qtd = 3
    },
    {
        mes = 3,
        qtd = 2
    },
    {
        mes = 4,
        qtd = 2
    },
    {
        mes = 5,
        qtd = 5
    },
    {
        mes = 6,
        qtd = 60
    },
    {
        mes = 8,
        qtd = 2
    },
    {
        mes = 9,
        qtd = 4
    },
    {
        mes = 10,
        qtd = 4
    },
    {
        mes = 11,
        qtd = 7
    },
    {
        mes = 12,
        qtd = 2
    }
]



O método vai receber um array de pedidos, através de um POST, exemplo:


POST api/calcula-comissao
{
    "pedidos": 
    [
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 500.34
        },
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 1000.22
        },
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 100.35
        },
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 22.34
        },
        {
            "vendedor": 1,
            "data": "2022-04-01",
            "valor" = 5000.34
        },
        {
            "vendedor": 2,
            "data": "2022-03-01",
            "valor" = 2000.34
        },
        {
            "vendedor": 2,
            "data": "2022-04-01",
            "valor" = 3000.34
        },
    ]
}

e o response será a comissao de cada vendedor em cada mes (xx,xx será na verdade o valor calculado):
{
    "comissoes": 
    [
        {
            "vendedor": 1,
            "mes": 3,
            "valor": "xx,xx"
        },
        {
            "vendedor": 2,
            "mes": 4,
            "valor": "xx,xx"
        }
    ]
}




BONUS: Testes de unidade


Teste 1 - Vendedor deve receber bonus se atingir a meta
ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 100,00
        },
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 100,00
        },
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 100,00
        },
    ]
}

SAIDA:
{
    "comissoes": 
    [
        {
            "vendedor": 1,
            "mes": 3,
            valor: "6,00"
        },
    ]
}



Teste 2 - Vendedor deve não receber bonus se atingir a meta
ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 100,00
        }
    ]
}

SAIDA:
{
    "comissoes":
    [
        {
            "vendedor": 1,
            "mes": 3,
            "valor": 1,00
        },
    ]
}



Teste 3 - Vendedor deve receber comissao segundo a faixa
ENTRADA:
{
    "pedidos":
    [
        {
            "vendedor": 1,
            "data": "2022-03-01",
            "valor" = 1000,00
        },
    ]
}

SAIDA:
{
    "comissoes": 
    [
        {
            "vendedor": 1,
            "mes": 3,
            "valor": 30,00
        },
    ]
}