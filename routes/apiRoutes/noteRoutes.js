
const router = require('express').Router();
const { notes } = require('../../db/db.json');

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

router.get('/notes', (req, res) => {
    let results = notes
    res.json(results);
    console.log(results);
});

router.get('/notes/:id', (req, res) => {
    const results = findById(req.params.id, notes);
    if (results) {
        res.json(results);
    } else {
        res.sendStatus(404);
    }
});

router.post('/notes', (req, res) => {
    let results = notes
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    res.json(req.body);
    results.push(req.body)
});


// function dbUpdate() {
//     fs.writeFile("db/db.json",JSON.stringify(notes,'\t'), err => {
//         if (err) throw err;
//         return true;
//     })
// }

module.exports = router;