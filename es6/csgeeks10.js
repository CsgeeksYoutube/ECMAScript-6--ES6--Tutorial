"use strict"
class Task{
	showid(){
		console.log('99')
	}
}
let task = new Task();
task.showid();



"use strict"
class Task{
	constructor(){
		console.log('constructor task')
	}
	showid(){
		console.log('99')
	}
}
let task = new Task();
task.showid();

"use strict"
let newClass = class Task{
	constructor(){
		console.log('constructor task')
	}
	showid(){
		console.log('99')
	}
}
new newClass();




"use strict"
class Task{
	constructor(name, age , weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
	showid(){
		console.log(this.name)
		console.log(this.age)
		console.log(this.weight)
	}
}
let task = new Task('vijay',95, 69);
let task1 = new Task('ajay',95, 699);
task.showid();
task1.showid();
