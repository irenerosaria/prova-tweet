var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var tweets = require('./routes/tweets');
app.use('/tweets', tweets);


var users = [
    {
        name: "Stefania",
        chat: "ciao ragazzi"
    },
    {
        name: "Simone",
        surname: "come state?"
    },
	{
        name: "luca",
        surname: "io bene"
    },
	
	{
        name: "Carlo",
        surname: " voi siete belli"
    }
	
];

app.set('port', (process.env.PORT || 3001));
app.listen(app.get('port'), function () {
    console.log('Server has started! http://localhost:' + app.get('port') + '/');
});
module.exports = app;