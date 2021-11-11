
const router = require('express').Router();
const fs = require('fs');


fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data)

    router.get('/notes', (req, res) => {
        if (notes) {
            res.json(notes);
            console.log(notes)
        } else {
            res.send(404)
        }
    })
});


module.exports = router;