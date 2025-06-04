const express = require("express");
const app = express();

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "tushar" || password != "pass") {
    res.status(400).json({
      msg: "something up with your input",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const KidneyId = req.query.KidneyId;
  if (KidneyId != 1 && KidneyId != 2) {
    res.status(400).json({
      msg: "something up with your input",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware , (req, res) => {
  res.json({
    msg: "your kidney is fine",
  });
});


app.listen(2002);
