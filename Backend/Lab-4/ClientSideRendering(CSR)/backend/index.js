const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const todos = ['Gaming', "Singing", "Playing", "Coding"]


app.get('/todos', (req, res) => {
    res.json(todos);
})

let x = [
    {
        Name: "GLA",
        Domain: "B.Tech",
        City: "Mathura"
    },
    {
        Name: "GLA",
        Domain: "B.Tech",
        City: "Mathura"
    },
    {
        Name: "GLA",
        Domain: "B.Tech",
        City: "Mathura"
    },
]

app.get('/university', (req, res) => {
    res.json(x);
})

app.listen(5050, () => {
    console.log("Server is running on 5050");

})