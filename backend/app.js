const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const env = require("dotenv/config")
 

app.listen(process.env.PORT || 5000)


const challengeRoute = require("./routes/challengeRoutes.js")
app.use("/", challengeRoute)

mongoose.connect(process.env.DB, (err) => {
    err ? console.log(err) : console.log("Mongo Live")
})