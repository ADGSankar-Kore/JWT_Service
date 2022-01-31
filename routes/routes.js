const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');

router.get("/status",function(req,res,next){
    res.send({"status":"I'm running"})
})
router.post("/api/users/sts",function(req,res,next){
    if(!req.body.identity || !req.body.clientId || !req.body.clientSecret){
        return res.status(400).send({"message":"Required fields missing"})
    }
    var identity = req.body.identity;
    var clientId = req.body.clientId;
    var clientSecret = req.body.clientSecret;
    var isAnonymous = req.body.isAnonymous || false;
    var aud = req.body.aud || "https://idproxy.kore.com/authorize";
  
    var options = {
      "iat": new Date().getTime(),
      "exp": new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getTime(),
      "aud": aud,
      "iss": clientId,
      "sub": identity,
      "isAnonymous": isAnonymous
    }
      var token = jwt.sign(options, clientSecret);
    res.send({"jwt":token});
})

module.exports = router