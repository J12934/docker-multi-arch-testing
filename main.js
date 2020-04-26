const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

const server = app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

process.on("SIGINT", () => {
  console.log('Received "SIGINT" Signal shutting down.');
  server.close();
  process.exit(0);
});
process.on("SIGTERM", () => {
  console.log('Received "SIGTERM" Signal shutting down.');
  server.close();
  process.exit(0);
});
