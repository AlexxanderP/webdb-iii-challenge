const server = require("./api/server");

const port = 6500;

server.listen(port, () => {
  console.log(`\n== Listening on http://localhost:${port} ===\n`);
});
