var http = require('http');
const PORT=process.env.PORT || 8080; 

function handleRequest(req, res){
  var ipAddr = req.headers['x-forwarded-for'];
  if (ipAddr) {
    var ipList = ipAddr.split(',');
    ipAddr = ipList[ipList.length - 1];
    res.end(ipAddr);
  } else {
    res.end(req.connection.remoteAddress + '\n');
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
