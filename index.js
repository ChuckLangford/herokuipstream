var http = require('http');
const PORT=process.env.PORT || 8080; 

function handleRequest(req, res){
  res.end(req.connection.remoteAddress + '\n');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
