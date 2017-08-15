"use strict"
var getProduct = function(productid = 500){
	console.log(productid);
}
getProduct();


"use strict"
var getProduct = function(productid = 500,type = 'software'){
	console.log(productid + ',' + type);
}
getProduct(undefined, 'vijay');


"use strict"
var getProduct = function(price , tax = price *0.08){
	console.log(price + tax); 
}
getProduct(5);

"use strict"
var baseTax = 0.59;
var getProduct = function(price , tax = price *0.08){
	console.log(price + tax); 
}
getProduct(5);



"use strict"
var generateBaseTax = () => 0.78;
var getProduct = function(price , tax = price * generateBaseTax()){
	console.log(price + tax);
}
getProduct(5);