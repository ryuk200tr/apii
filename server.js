const express = require('express');
const app = express();
const http = require('http');
app.use(express.static('public'));
app.listen(8000)
app.get('/', (request, response) => {

 response.json({ip: '217.131.114.104'})
})
