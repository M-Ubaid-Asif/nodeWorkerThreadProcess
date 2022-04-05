const { Worker } = require("worker_threads");

const express = require("express");

const app = express();
let worker;

app.get("/:num", (req, res) => {
  const number = req.params.num;
  worker = new Worker("./worker.js");
  console.log(number);
  worker.postMessage(number);
  //Listen for a message from worker
  worker.on("message", (result) => {
    res.status(200).json(result);
  });

  worker.on("error", (error) => {
    console.log("---", error);
  });
});

app.listen(9000, () => {
  console.log("server in running on port 9000");
});
