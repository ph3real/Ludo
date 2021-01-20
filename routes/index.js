const express = require('express');
const router = express.Router();
const stats = require('../stats');

/* GET home page */
router.get("/", (req, res) => {
    res.render("splash.ejs", {
        ongoingGames: stats.getOngoingGames(),
        currentlyPlaying: stats.getCurrentlyPlaying(),
        playersWaiting: stats.getPlayersWaiting()
    });
});

/* GET rules page */
router.get("/rules", function (req, res) {
    res.sendFile("rules.html", {root: "./public"});
});

/* GET game page */
router.get("/play", function (req, res) {
    res.sendFile("game.html", {root: "./public"});
});

module.exports = router;
