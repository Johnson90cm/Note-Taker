const router = require('express').Router();
const fs = require('fs');

fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data)

    router.get('/notes', (req, res) => {
            res.json(notes);
            console.log(notes)
    })

    router.post('/notes', (req, res) => {
        req.body.id = notes.length.toString();
        let newNote = req.body;
        notes.push(newNote);
        writeDb()
        return console.log(newNote.title);
    })

    router.get("/notes/:id", function (req, res) {
        res.json(notes[req.params.id]);
    });

    router.delete("/notes/:id", function (req, res) {
        notes.splice(req.params.id);
        writeDb();
        console.log("Deleted note with id " + req.params.id);
    });

    function writeDb() {
        fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
            if (err) throw err;
            return true;
        });
        location.reload()
    }
});

module.exports = router;