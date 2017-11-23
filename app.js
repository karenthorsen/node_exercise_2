const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/greet/:name', function(req, res) {
    res.send(greeting_function() + " " + req.params.name);
});

function greeting_function() {
    var greeting_array = ["hei", "hola", "halla", "bonjour", "hello"];

    var greeting = greeting_array[Math.floor(Math.random() * 5)];

    return greeting;
}

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
