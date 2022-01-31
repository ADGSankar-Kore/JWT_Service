const express = require('express')
var bodyparser = require('body-parser');
var cors = require('cors')
const app = express();
const router = require("./routes/routes");
const config = require("./config.json")

app.use(cors())
app.use(bodyparser.json({ limit: '10mb' }));
app.use(bodyparser.urlencoded({ extended: true, limit: '10mb' }));
app.use("/",router);
var server = app.listen(config.server.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.info(`app listening at http://${host}:${port}`);
});