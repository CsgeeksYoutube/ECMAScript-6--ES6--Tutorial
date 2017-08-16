// Generators

"use strict"
/*function *process(){
	yield 8000;
	yield 8001;
}
let it = process();

console.log(it.next());*/

/*function *process(){
	yield 8000;
	yield 8001;
}
let it = process();
it.next();
it.next();
console.log(it.next());*/


/*function *process(){
	let result  = yield;
	console.log(`result is ${result}`);

}

let it = process();
it.next();
it.next(200);*/

// function *process(){
// 	let newArray  = [yield,yield,yield];
// 	console.log(newArray[2]);

// }

// let it = process();
// it.next();
// it.next(20);
// it.next(200);
// it.next(20000);

function *process(){
	yield 42;
	yield [1,2,3]


}

let it = process();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

























