const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Hello Cloud!!!");
  res.write("Welcome to my page.");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});