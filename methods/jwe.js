var jwt = require('jsonwebtoken');
var jose = require('node-jose');
const config = require("../config.json")

function jweTokenGenerator(req, res, next) {
    console.log("JWE token generaion")
    var jwePublicKey = config.jwePublicKey;
    var identity = req.body.identity;
    var clientId = req.body.clientId;
    var clientSecret = req.body.clientSecret;
    var isAnonymous = req.body.isAnonymous || false;
    var aud = req.body.aud || "https://idproxy.kore.com/authorize";
    var options = {
        "iat": Date.now() / 1000,
        "exp": Date.now() / 1000 + 1800,
        "aud": aud,
        "iss": clientId,
        "sub": identity,
        "isAnonymous": isAnonymous,
    }
    var headers = {};
    var token = jwt.sign(options, clientSecret, headers);

    jose.JWE.createEncrypt({
        format: "compact"
    }, jwePublicKey).update(token).final().then(function (encryptedToken) {
        res.header("Access-Control-Allow-Origin", "*");
        res.send({
            "jwt": encryptedToken,
        });
    });
}

module.exports.jweTokenGenerator = jweTokenGenerator;