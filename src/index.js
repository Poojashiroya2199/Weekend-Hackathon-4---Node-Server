// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
  
// }

// module.exports = httpServer;
var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  if(req.url=='/welcome'){
  res.write('Welcome to Dominose');
  res.end();
  }
  else if(req.url=='/contact'){
    res.write(JSON.stringify({
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
        }));
    res.end();
  }
  else{
res.write("404");
res.end();
  }

}

console.log('listening for client request....');
httpServer.listen(8081);
module.exports = httpServer;
