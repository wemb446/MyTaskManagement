require('dotenv').config();

const express = require("express");
const mysql = require("mysql");
const md5 = require("MD5");

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mtm',
  password: process.env.PASS,
  database: 'MTM'
});

connection.connect((err)=>{
  if(err){
    console.log(`error connecting: ${err.stack}`);
    return;
  }
  console.log('success');
});

app.get('/', (req, res)=>{
  connection.query(
    'SELECT * FROM MTM_TMS_PROCESS',
    (error, results)=>{
      console.log(results);
    }
  );
});

app.listen(3001);

