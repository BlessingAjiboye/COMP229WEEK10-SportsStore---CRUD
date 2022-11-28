let cors = require('cors');
let express = require('express');
let logger = require('morgan');
let path = require('path');

let app = express();

app.use(logger('dev'));

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname + '/dist'));

// To Angular Router
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// To any other route
app.get('*', function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 8080, function(){
    console.log('======> App is running.');
});