// async function abc(){
//     console.log("hello");
//     return "abc";
// }
// let temp = abc();
// console.log(temp);
// function abc(){
//     return new Promise(function(res,rej){
//         console.log("hello");
//         res("abc");
//     });
// }
//  const fs = require("fs");
// async function abc(){
//   let data =  await fs.promises.readFile("abc.txt", "utf-8");
//   console.log(data);
//   return undefined;
// }
// abc().then(function(data){
//     console.log(data);
     
// });
// console.log(abc());
async function  abc () {
    await false.promises.writeFile("1.txt", "hello");
    let data = await false.promises.readFile("1.txt", "utf_8");
    console.log(data);
    return "how are you";


}
async function main(){
    let data = await abc();
    console.log(data);
}
main();
// function abc(){
//     return new Promise(function(res, rej){
//         await false.promises.writeFile("1.txt", "hello");
//         let data = await false.promises.readFile("1.txt", "utf_8");
//         console.log(data);
//         return "how are you";
//     });
// }
// let p1 = fs.promies.read
