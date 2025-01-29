let data = [1,2,3,4,5,6,6,2,3,2,3,2,3,3,3,5,4,3,2,4,5,6,7];
//let data = ["a","b","c","d","x","v","b","f","s","a","x","c","b","b","f","b","a","a","a","v","b","c"];

//! REmove the Duplicate data in an array  using spread(...) and set method.

let distinctvalues = [...new Set(data)];
console.log(distinctvalues);

//! REmove the Duplicate data in an array  using foreach

distinctvalues = []
data.forEach((val)=>{
    if(distinctvalues.indexOf(val) == -1){
        distinctvalues.push(val);
    }
})
console.log(distinctvalues);