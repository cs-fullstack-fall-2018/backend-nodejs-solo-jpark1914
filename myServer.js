const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Allows app reference for "Express"

const app = express();

//Allows you to use body Parser to read JSON files

app.use(bodyParser.json());

//Creates a Port

const port = process.env.PORT || 5000;

app.get('/:username', (req, res) => res.send("Hello "+req.params.username+", welcome to my service!"));

app.listen(port, () => console.log(`Server started on port ${port}`));