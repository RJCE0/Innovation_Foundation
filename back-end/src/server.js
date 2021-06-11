import Database from './database'
import path from 'path';


const { Pool } = require('pg')
const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

// Connection configuration
const port = process.env.PORT || 5000;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

// Middleware
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../front-end/build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({"test": true})
})

app.get('/dbCon', (req, res) => {
  pool
    .connect()
    .then(() => res.json({"result": "Database connected"}))
    .catch(err => console.log(err))
})

app.post("/register", async (req, res) => {
  try{
    const newUser = await Database.addUser(req.body);
    console.log(newUser);
    res.json(newUser);
    } catch (error) {
    res.body = "Error: " + error;
    }
});

// To obtain opportunities from database for dynamically displaying
app.get("/discover", async (req, res) => {
  try{
    const opportunities = await Database.getAllOpportunities();
    console.log(opportunities);
    res.json(opportunities);
    } catch (error) {
    res.body = "Error: " + error;
    }
  });

app.get("/internships", async (req, res) => {
    try{
      const opportunities = await Database.sortInternByViews();
      console.log(opportunities);
      res.json(opportunities);
      } catch (error) {
      res.body = "Error: " + error;
      }
    });

app.get("/custom", async (req, res) => {
      try{
        const opportunities = await Database.getCustomFilterOpps(req.query.body);
        console.log(opportunities);
        res.json(opportunities);
        } catch (error) {
        res.body = "Error: " + error;
        }
      });

// When new get requests are required, using existing sql queries write here:


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})