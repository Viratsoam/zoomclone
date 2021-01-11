const express = require("express");
const app = express();
const PORT = 3030 || process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send("Hello Wolrd!");
});

// start server
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error while starting the Server:${err}`);
    return;
  }
  console.log(`Server is up on PORT:${PORT}`);
});
