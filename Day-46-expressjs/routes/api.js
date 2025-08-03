const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Api is working");
})

router.get("/status", (req, res) => {
    res.send("ha ha ha ha");
});

router.get("/new", (req, res) => {
    res.send("he he he");
}); 

router.get("/new/one", (req, res) => {
    res.send("hu hu hu ");
});

module.exports = router;