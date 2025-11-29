const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    
    // Serve index.html
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Error loading page");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Serve styles.css  <-- updated filename
    else if (req.url === "/styles.css") {
        fs.readFile("./styles.css", (err, data) => {
            if (err) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("CSS file not found");
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    }

    // All other routes
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});