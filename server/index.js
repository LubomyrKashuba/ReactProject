const express = require("express");
const cors = require('cors');
const data = require('./data.json');

const app = express();  
app.use(cors());
// app.use(express.json);

app.get("/", function (req, res) {
  res.send(data).status(200);
});

app.listen(8000,()=>{return(console.log('Server started'))});
