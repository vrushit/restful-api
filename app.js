const express = require('express');

const app = express();

//---------------Routes-------------------

app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(3000);


