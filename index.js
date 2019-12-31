const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = q.pathname.length > 1 ? "." + q.pathname + ".html" : "./index.html";

  //create list of available paths
  const availablePaths = [];
  fs.readdir("./", (err, files) => {
    files.forEach(file => {
      if (file.endsWith(".html")) {
        availablePaths.push("./" + file);
      }
    })
  });


  //check if filename in list of available paths
  //if true, do the fn below, if false, show 404.html

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found, default message");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 