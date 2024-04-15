//console.log("hello to the world ");

// Prints: /Users/mjr
//console.log(path.dirname(__filename));
// Prints: /Users/mjr

// console.log(__filename);
// Prints: /Users/mjr/example.js
//console.log(__dirname);
// Prints: /Users/mjr


///const modules =require("./mymodule");

//const { v4:uuidv4 }=require("uuid");


//console.log(modules.add(5,6));
//console.log(uuidv4());

/*const os =require('os')
console.log(os.cpus());

*/
 const fs=require("fs");


/* fs.writeFileSync('text.txt', 'Now we are here, Hello everyone')
 fs.writeFile('text2.txt', 'How far this one Naa async file writing', (err,data)=>{
  if (err) {
    console.error('incorrect');
  }
  console.log(data);
 })
*/


 /*fs.readFile("text.txt",  (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  })
  */

  fs.readFile("text.txt",  'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
  })

  /*fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
*/
  fs. appendFile('text2.txt', 'i just addd this now, hope it is working', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });