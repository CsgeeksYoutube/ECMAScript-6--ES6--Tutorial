"use strict"
var price = 5.99, quan = 10;
var productview ={
	price,
	quan
	
};
console.log(productview);


"use strict"
var price = 5.99, quan = 10;
var productview ={
	price,
	quan,
	calculatevalue(){
		return this.price *this.quan
	}
	
};
console.log(productview.calculatevalue());


"use strict"
var price = 5.99, quantity = 10;
var productview ={
	price:7.99,
	quantity:8.99,
	cal(){
		return this.price * this.quantity
	}
};
console.log(productview.cal());

"use strict"
var field = 'dynamicfield'
var price = 10;
var productview = {
	[field]:price
};
console.log(productview);

"use strict"
var field = 'dynamicfield'
var price = 10;
var productview = {
	[field +"00125"]:price
};
console.log(productview);


"use strict"
var method = 'doit'
var productview = {
	[method +"-001"](){
		console.log("vijay manral")
	}
}
productview['doit-001']();
