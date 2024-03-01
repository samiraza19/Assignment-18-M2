// console.log("Hello World")


const fs = require("fs")
// ---------------------- For Create File -------------
fs.writeFileSync("text.txt","Assalam O Alaikum..")

// ---------------------- For Read File -------------
fs.readFile("text.txt","utf-8",(err,res)=>{
console.log(res)
})

// --------------------- For Update File -----------
fs.appendFile("text.txt","My name is Sami Raza",(err)=>{
if(!err)console.log("file has been updated")
})

// --------------------- For Delete File ------------
fs.unlinkSync("text.txt")