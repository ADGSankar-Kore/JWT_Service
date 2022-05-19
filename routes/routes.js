const express = require('express');
const router = express.Router();
const {jwtTokenGenerator} = require("../methods/jwt")
const {jweTokenGenerator} = require("../methods/jwe")

router.get("/status",function(req,res,next){
    res.send({"status":"I'm running"})
})
router.post("/api/jwt",jwtTokenGenerator)
router.post("/api/jwe",jweTokenGenerator)

module.exports = router