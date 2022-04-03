const express = require("express")
const router = express.Router()
const ChallengeRequestSchema = require("../models/challengeModel.js")

router.get("/requests", async (req, res) => {
    const challengeRequests = await ChallengeRequestSchema.find()

    try {
        res.send(challengeRequests)
    } catch (err) {
        res.send(err)
    }
})

router.post("/new-request", async (req, res) => {
    const newChallenge = new ChallengeRequestSchema({
        challenge: req.body.challenge
    })  

    const save = await newChallenge.save()

    try {
        res.send(save)
    } catch (err) {
        res.send(err)
    }
})

router.get("/daily-challenge", async (req, res) => {
    res.send("Reduce your plastic bags in your household and replace them with multiple reusable ones for whenever you go to the store or for storing stuff ")
})
module.exports = router