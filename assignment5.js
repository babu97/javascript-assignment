
//  Write a function that takes an object with two properties as an argument. It should return the value of the property with key 'prop-2'. 
// Tip: you might want to use the square brackets property accessor


function getProp(object){
return object['prop-2'];
}

let names ={
'prop-1': 'Ben',
'prop-2': 'Charles'

}

console.log(getProp(names))

