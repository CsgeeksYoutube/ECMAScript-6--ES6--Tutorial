"use strict"
var showCategories = function(productid, ...categories){
	console.log(categories instanceof Array);
}
showCategories(123456, 'vijay', 'ajay', 'raman');

"use strict"
var showCategories = function(productid, ...categories){
	console.log(categories);
}
showCategories(123456, 'vijay', 'ajay', 'raman');

"use strict"
var showCategories = function(productid, ...categories){
	console.log(categories);
}
showCategories(123456);

"use strict"
var showCategories = function(productid, ...categories){
	
}
console.log(showCategories.length);

"use strict"
var showCategories = function(productid, ...categories){
	console.log(arguments.length);
};
showCategories(123456, 'vijay', 'ajay', 'raman');

//spread
"use strict"
var prices = [12,25,36];
var maxPrice = Math.max(...prices);
console.log(maxPrice);

"use strict"
var prices = [12,25,36];
var maxPrice = [...prices];
console.log(maxPrice);

"use strict"
var maxPrice = Array(...[, ,]);
console.log(maxPrice);

"use strict"
var maxPrice = [...[, ,]];
console.log(maxPrice);

"use strict"

var maxPrice =  Math.max(..."43215");
console.log(maxPrice);