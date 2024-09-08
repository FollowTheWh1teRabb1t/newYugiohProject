const express = require("express");
const router = express.Router();

router.get('/cors', (req,res) => {
    res.json({ mensagem: 'Cors está funcionando!'})
});

module.exports = router;