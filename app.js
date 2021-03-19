const express = require('express');

const app = express();

const port = 10000;

app.get('/', (req, res) => {
    res.send('hpa');
});

app.get('/hpa', (req, res) => {

    var i;
    var x = 0.0001;
    var i;
    for (i = 0; i <= 1000000; i++) {
        x += Math.sqrt(x);
    }
    res.send('Ok!' + x.toString());
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))