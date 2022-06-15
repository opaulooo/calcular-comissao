const metas = require('../data/metas')

/* 
    Função para calcular a comissao dados por vendedores e meses somando os valores

    retorno no formato
    vendedores =
    [   
        {
            "vendedor": 0,
            "mes": 0,
            "valor": 0
        },
    ]
*/
async function calculaComissao(comissao) {

    return new Promise((res, rej) => {
        var vendedores = [];

        comissao.forEach((element, index) => {
            var mes = parseInt(element.data[5] + element.data[6])
            var addValor = 0
            if (element.valor < 300) {
                addValor = element.valor * 0.01
            } else if (element.valor >= 300 && element.valor <= 1000) {
                addValor = element.valor * 0.03
            } else {
                addValor = element.valor * 0.05
            }

            if (!vendedores || vendedores ? false : true) {
                let object = {
                    vendedor: element.vendedor,
                    mes: mes,
                    valor: addValor,
                    // valorVenda: element.valor,
                    qtd: 1
                }
                vendedores.push(object)
            } else {
                let i = vendedores.findIndex((el) => {
                    return (el.vendedor == element.vendedor && el.mes == mes)
                })
                if (i != -1) {
                    let object = {
                        vendedor: element.vendedor,
                        mes: mes,
                        valor: vendedores[i].valor + addValor,
                        // valorVenda: vendedores[i].valorVenda + element.valor,
                        qtd: vendedores[i].qtd ? vendedores[i].qtd + 1 : 1
                    }
                    vendedores[i] = object
                } else {
                    let object = {
                        vendedor: element.vendedor,
                        mes: mes,
                        valor: addValor,
                        // valorVenda: element.valor,
                        qtd: 1
                    }
                    vendedores.push(object)
                }
            }
        });

        res(vendedores)
    })
}

async function calculaBonus(comissao) {

    return new Promise(async (res, rej) => {

        comissao.forEach((element, index) => {
            let i = metas.findIndex((el) => {
                return (el.mes == element.mes)
            })
            if (i != -1) {
                if (element.qtd >= metas[i].qtd) {
                    element.valor = element.valor * 2;
                }
            }
            element.valor = parseFloat(element.valor.toFixed(2))
        });

        res(comissao)
    })
}


module.exports = {
    async getCalculaComissao(req, res) {

        console.log(metas)

        res.send(null)
    },


    async postCalculaComissao(req, res) {
        var comissao = req.body;
        var comissoes = null;
        await calculaComissao(comissao).then(async (response1) => {
            await calculaBonus(response1).then(async (response2) => {

                comissoes = response2;

                console.log('\nComissões dos vendedores retornadas com sucesso!\n')
                res.send({
                    comissoes
                })
            })

        }).catch((err) => {
            console.log('\nHouve um erro ao retornar as comissões dos vendedores!\n')
            console.log(err)
            res.send(err)
        })
    },
}