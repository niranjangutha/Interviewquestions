

var name = "My name is niranjan"

var words = name.split(" ");
let small = 0;
let smallstring = "";

/**
 * using the below methos , answer may vary depends on the same lenth of words will occur in the string.
 * based on requirement we have to choose the right method.
 */



//!Method1 : Basic For loop
for (let i =0; i < words.length-1;i++){
    if(words[i].length > words[(i+1)].length) {
         smallstring = words[i+1];
    }
    else {
        smallstring = words[i];
    }
}
console.log("Method1: ",smallstring);

//!Method2 : using map function:

var wordslenth = words.map((val)=>{
return {id : val, len : val.length}
} ).sort((a,b)=> a.len-b.len);

console.log("Method2:", wordslenth[0].id);

//!Method3 : using reduce function: 
var smalestword = words.reduce((smalest,current)=>{
    //console.log("smalest:"+smalest+",current:"+current);
    return current.length < smalest.length ? current: smalest;
})
console.log("Method3:",smalestword);

//!Method4 : using foreach loop
var i =1;
var  smalestword= "";
while (i <words.length) {
   if( words[i].legth < words[i-1].length){
    smalestword = words[i];
   }
   else {
    smalestword = words[i-1];
   }
   i++  
}
console.log("Metho4:",smalestword);

//! Method5 : using sort method 

var smallest = name.split(" ").sort((a,b)=>a.length-b.length)[0];

console.log("method5 :",smallest);





