"use strict";

const express = require('express');
const axios = require('axios');
const app = express();
const router = express.Router();
const config = require('./config');

app.use(express.static('public'));
app.use(express.json());

router.get('/callback', (req, res) => {
    const code = req.query.code;
    const state = req.query.state;
    axios.post('https://github.com/login/oauth/access_token', {
        data: {
            client_id: config.github.clientId,
            client_secret: config.github.clientSecret,
            code: code
        }
    }).then(function (response) {
        res.send({message: req.query});
    }).catch(function (error) {
        res.send({message: error});
    });
});

app.use('/api', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'));