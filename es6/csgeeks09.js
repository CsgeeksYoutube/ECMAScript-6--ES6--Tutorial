"use strict"
let salary = ['25000','50000','15000'];
let [low , average, high] = salary;
console.log(high);  

"use strict"
let salary = ['25000','50000','15000'];
let [low , ...remaining] = salary;
console.log(remaining); 

"use strict"
let salary = ['25000','50000',['15000','45454']];
let [low , average,[alow,aaverage]] = salary;
console.log(alow); 


"use strict"
function rsalary = (['low','average'],high ='80000'){
console.log(average)
}
rsalary(['32000', '25000']); 

"use strict"
let salary={
	low : '35000'.
	average : '25000'.
	high: '80000'
};
let {low, average,high} = salary
console.log(high);


"use strict"
let [maxcode , mincode] ='AB';
console.log(`min : ${mincode} max : ${maxcode}`); 