const fs = require("fs");
function main() {
    let filewrittenpromise = writefile("1.txt");
    for(let i =2; i<=8; i++){
        filewrittenpromise = filewrittenpromise.then(function(){
console.log(i-1 +"file written");
return writefile(i + ".txt");
        });
    }
    filewrittenpromise.then(function(){
        console.log("last file written");
    })

}
function writefile(filename){
    
    let numberoflines = Math.floor(Math.random()*101);
    let data ="";
    for (let i =0; i<numberoflines; i++){
        if(i == numberoflines -1){
             
        
        data += Math.floor(Math.random()*101);}
        else {
            data += Math.floor(Math.random()*101 )+ "\n";

        }
    }
    return fs.promises.writeFile(filename,data);
}
main();