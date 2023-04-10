const express = require('express');
const app=express();
const port=3000;
const fs=require('fs');

//read file

app.get('/',(req,res)=>{
    fs.readFile('text.txt', 'utf8', (err, data) => {
        if (err) {
            res.send(err);
          console.error(err);
          return;
        }
        res.send(data);
        console.log(data);
      });
})

//write file

const content = 'Writing text to a file!!!!';
try {
  fs.writeFileSync('text.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}

//append data

app.get('/add_data',(req,res)=>{
    let add_data="Adding data in the file!";
    try{
        fs.appendFileSync('text.txt',add_data);
        res.send("data appended to file")
    }catch{
        console.error(err);
    }
})

app.listen(port,()=>{
    console.log("listening port "+port)
})