//let data = [1,2,3,4,5,6,6,2,3,2,3,2,3,3,3,5,4,3,2,4,5,6,7];
let data = ["a","b","c","d","x","v","b","f","s","a","x","c","b","b","f","b","a","a","a","v","b","c"];


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


//! Remove the Duplicates in array of objects.
const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }, // Duplicate
    { id: 3, name: 'Charlie' }
];

// Remove duplicates based on 'id'
const uniqueArray = array.reduce((accumulator, currentValue) => {
    if (!accumulator.some(item => item.id === currentValue.id)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArray);
