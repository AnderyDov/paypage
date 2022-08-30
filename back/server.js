const express = require("express");
const bodyParser = require("body-parser");
const { createPool } = require("mysql2");
const { resolve } = require("path");
const { HOST, USER, PASSWORD, DB } = require("./config/db.config.js");

const server = express();
const pool_paypage = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
  waitForConnections: true,
  connectionLimit: 30,
  queueLimit: 30,
});

server.use(bodyParser.json());
server.use(express.static(resolve(__dirname, "../paypage/build")));

server.get("/paypage/", (req, res) => {
  res.sendFile(resolve(__dirname, "../paypage/build/index.html"));
});

server.get("/paypage/api", (req, res) => {
  res.json("Hello from server!");
});

server.get("/paypage/connect", (req, res) => {
  pool_paypage.query(
    "SELECT DISTINCT street FROM paypage",
    (err, result, fields) => {
      if (!err) {
        res.json("connect");
      } else {
        console.log(err);
      }
    }
  );
});

server.get("/paypage/getstreets", (req, res) => {
  pool_paypage.query(
    "SELECT DISTINCT street FROM paypage",
    (err, result, fields) => {
      if (!err) {
        res.json(result);
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/paypage/gethouses", (req, res) => {
  console.log(req.body);
  pool_paypage.query(
    `SELECT DISTINCT house FROM paypage WHERE street="${req.body.street}"`,
    (err, result, fields) => {
      if (!err) {
        res.json(result);
      } else {
        console.log(err);
        res.json("no");
      }
    }
  );
});

server.post("/paypage/getappartments", (req, res) => {
  console.log(req.body);
  pool_paypage.query(
    `SELECT appartment FROM paypage WHERE street="${req.body.street}" AND house="${req.body.house}"`,
    (err, result, fields) => {
      if (!err) {
        res.json(result);
      } else {
        console.log(err);
        res.json("no");
      }
    }
  );
});

server.post("/paypage/authls", (req, res) => {
  console.log(req.body);
  pool_paypage.query(
    `SELECT * FROM paypage WHERE ls='${req.body.ls}' AND pass='${req.body.pass}'`,
    (err, result, fields) => {
      if (!err) {
        if (result.length === 0) {
          res.json("no");
        } else {
          res.json(result[0]);
        }
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/paypage/authaddres", (req, res) => {
  console.log(req.body);
  pool_paypage.query(
    `SELECT * FROM paypage WHERE street='${req.body.street}' AND house='${req.body.house}' AND appartment='${req.body.appartment}' AND pass='${req.body.pass}'`,
    (err, result, fields) => {
      if (!err) {
        if (result.length === 0) {
          res.json("no");
        } else {
          res.json(result[0]);
        }
      } else {
        console.log(err);
      }
    }
  );
});

server.post("/paypage/submitdata", (req, res) => {
  console.log(req.body);
  pool_paypage.query(
    `UPDATE paypage SET cold='${req.body.cold}', hot='${req.body.hot}', date='${
      req.body.date
    }', dolg='${req.body.cold * 47 + req.body.hot * 200}' WHERE ls='${
      req.body.ls
    }'`,
    (err, result, fields) => {
      if (!err) {
        pool_paypage.query(
          `SELECT * FROM paypage WHERE ls='${req.body.ls}'`,
          (err, result, fields) => {
            if (!err) {
              res.json(result[0]);
            } else {
              res.json("no");
              console.log(err);
            }
          }
        );
      } else {
        console.log(err);
      }
    }
  );
});

server.use((req, res) => {
  res.json("error");
});

server.listen(4000, () => {
  console.log("http://localhost:4000");
});
