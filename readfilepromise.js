const fs = require("fs");
let readfilepromise = fs.promises.readFile("2.txt", "utf-8");
console.log(readfilepromise);
readfilepromise.then(function(data){
    console.log(readfilepromise);
    console.log(data);
    return "abhay";
})
.then(function(data){
    console.log(data);
    return "kumar";

}).then(function(data){
    console.log(data);
})
.catch(function(err){
    console.log(readfilepromise);
})
console.log("i ran first");
readfilepromise.then(function(data){
    console.log("I ran last");
})
