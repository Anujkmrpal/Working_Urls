const express = require('express');
const router = express.Router();

var ActiveUrl = require('../module/activeUrl');
var activeUrl = new ActiveUrl();


router.get('/findServer', (req, res) => {
    try {
        activeUrl.findServer()
            .then((data) => {
                // res.send(JSON.stringify(data));
                res.status(data.status).send(JSON.stringify(data))
            }).catch((err) => {
                res.status(500).send(err)
            })
    } catch (error) {
        res.status(500).send(error)
    }
});

router.all('*', function (req, res) {

    res.status(500).send('Invalid Request')
});
module.exports = router;