// Write a function that takes an object with two properties (country, continent)
//  as argument It should return the value of the property with key country

function selectCountry(myObj){
 
if ('country' in myObj)

return  myObj.country;

}

let myObj = {

    'country': 'Kenya', 
    'continent': 'Africa',

};
let mycountry = selectCountry(myObj)
console.log(mycountry)




