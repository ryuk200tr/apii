const express = require('express');
const app = express();
const http = require('http');
app.use(express.static('public'));
let port = process.env.PORT || 3000;
app.get('/', (request, response) => {

 response.json({ip: '217.131.114.104'})
})
