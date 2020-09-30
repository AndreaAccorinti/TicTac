const express = require('express');

const app = express();

app.use(express.static('./dist/myapp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/myapp/'}),
);

app.listen(process.env.PORT || 8080);