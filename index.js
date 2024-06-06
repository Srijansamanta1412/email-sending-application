const express = require('express')
const app = express()
const router=require('./routes/router')
const dbConnect=require('./configuration/db_connect')
const {mailServerConnect}=require('./configuration/mail_server_connect')
const bodyParser = require('body-parser');
const port = 3000

// Serve static files from the 'static' folder
app.use(express.static('static'));
//app.use(express.json());

/*------------- This is a middleware that parses the data in the url-encoded format.This is the standard method used by html forms to store data -------------*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',router);
dbConnect();
mailServerConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})