const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  console.table(q);
  const filename = q.pathname.length > 1 ? "." + q.pathname + ".html" : "./index.html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      //display 404 page
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 