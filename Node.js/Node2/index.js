const express = require("express");
const fs = require("fs");
const csv = require('csv-parser');
const app = express();
app.use(express.json());

const pathToFile = "test.csv";

const dataInCSV = (data) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(pathToFile, { flags: "a" });
    if (stream.write(`${data}\n`)) {
      resolve();
    } else {
      stream.on("drain", resolve);
    }
    stream.on("error", (err) => reject(err));
  });
};

app.post("/users", async (req, res) => {
  try {
    const data = req.body;
    await dataInCSV(Object.values(data).join(","));
    res.status(200).json({ message: "Data written to CSV file" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to write data to CSV file" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const csvFilePath = "test.csv"; 
    const results = [];

    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        res.status(200).json(results);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to read CSV file" });
  }
});

//update the data:


app.listen(5000, () => {
  console.log("Server listening on port 5000");
});