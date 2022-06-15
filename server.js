const express = require('express')

const app = express()
const port = 8100

let calculaComissaoRoute = require('./routes/comissao.routes')
let bodyParser=require('body-parser');

app.use(bodyParser.json())
app.use('/api', calculaComissaoRoute)

app.listen(port, () => {
    console.log('\n\nAPI na porta ' + port + '...\n');
});