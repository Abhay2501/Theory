
let a =1;
let epromise = new Promise(function(res,rej){
if(a%2 ==0){
    res("even");

}else{
    rej("abc");
}
});
epromise.then(function(data){
   console.log(data);
   console.log("hii");

})
.catch(function(err){
    console.log(err);
})
 