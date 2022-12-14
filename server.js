const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      //   res.writeHead(301, { Location: "/about" });
      res.setHeader({ Location: "/about" });
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 400;
      break;
  }
  res.setHeader("Content_Type", "text/html");
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(5000, () => {
  console.log("listening on port");
});
