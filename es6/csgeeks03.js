"use strict"
var getPrice = () => 5.99;
console.log(getPrice());


"use strict"
var getPrice = count => count *5.99;
console.log(getPrice(2));


"use strict"
var getPrice = (count, tax) => count *5.99 *(1 +tax);
console.log(getPrice(2, 0.08));


"use strict"
var getPrice = (count, tax) => {
	var price = count * 4.00;
	price *=(1 + tax);
	return price
}
console.log(getPrice(2, 0.08));