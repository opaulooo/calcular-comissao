const express = require('express')
const router = express.Router()

const { postCalculaComissao, getCalculaComissao } = require("../controllers/calcula-comissao")


router.get('/calcula-comissao', getCalculaComissao)
router.post('/calcula-comissao', postCalculaComissao)


module.exports = router;