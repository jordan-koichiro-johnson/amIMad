const express = require('express');
var bodyParser = require('body-parser')
const path = require('path')
const PORT = 3009
const app = express();
const router = express.Router()
const { SentimentAnalyzer, stemmer } = require('natural');
const { json } = require('express');
app.use(express.json());
app.use(express.static("express"))

app.use("/", express.static(__dirname))
app.use('/', router)

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/express/index.html'))
})


router.post('/natural', (req, res) => {
    const analyzer = new SentimentAnalyzer("English", stemmer, "afinn");

    console.log(req.body)
    res.json(analyzer.getSentiment(req.body))
})





app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

