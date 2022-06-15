const express = require('express')
const router = express.Router()

const {
    postCalculaComissao
} = require("../controllers/calcula-comissao")


router.post('/calcula-comissao', postCalculaComissao)


module.exports = router;