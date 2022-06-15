const express = require('express')

const app = express()
const port = 8100
module.exports = port

let comissaoRoute = require('./src/routes/comissao.routes')
let bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/api', comissaoRoute)

app.listen(port, () => {
    console.log('\n\nAPI na porta ' + port + '...\n');
});