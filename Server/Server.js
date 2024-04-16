console.log("We are starting server ");



const fs =require('fs')


let html;

fs.readFile('index.html', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        html=data
    }
  });



const http = require("http");

http.createServer((req, res) => {
    console.log('request was made ');
  res.setHeader('Content-Type','text/html');
  res.write(html)
  res.end()
}).listen(3000, 
    () => {
  console.log("i got a request");
});
