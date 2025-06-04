const express = require("express");
const app = express();

app.use(express.json());

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidney = users[0].kidneys;
  const numberOfKidney = johnKidney.length;

  let noOfHealthykidney = 0;
  for (let i = 0; i < numberOfKidney; i++) {
    if (johnKidney[i].healthy) {
      noOfHealthykidney = noOfHealthykidney + 1;
    }
  }
  const noOfUnhealthyKidney = numberOfKidney - noOfHealthykidney;
  res.json({
    numberOfKidney,
    noOfHealthykidney,
    noOfUnhealthyKidney,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  console.log(isHealthy);

  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  if (atleastOneUnhealthyKidney()) {
    const newKidney = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidney;
    res.json({ msg: "ddddone" });
  } else {
    res.status(411).json({
      msg: "you have no bad kidneys",
    });
  }
});
// function to alteast one unhealthy kidney
function atleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}
app.listen(2001);
