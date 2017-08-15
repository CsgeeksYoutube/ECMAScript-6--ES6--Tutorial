 //Inheritance(extends and super)
"use strict"
class Project{
	constructor(){
		console.log('constructor project');
	}
}
class Sproject extends Project{
	
}
let p = new Sproject();


"use strict"
class Project{
	constructor(name){
		console.log('constructor project ' + name);
	}
}
class Sproject extends Project{
	
}
let p = new Sproject('vijay');


"use strict"
class Project{
	constructor(){
		console.log('constructor project vijay');
	}
}
class Sproject extends Project{
	constructor(){
		//super();
		console.log('constructor project');
	}
	
}
let p = new Sproject();


"use strict"
class Project{
	getTask(){
		return 50;
	}
	
}
class Sproject extends Project{
	getTask(){
		return 550;
	}
	
}
let p = new Sproject();
console.log(p.getTask())


"use strict"
class Project{
	getTask(){
		return 50;
	}
	
}
class Sproject extends Project{
	getTask(){
		return super.getTask() * 6;
	}
	
}
let p = new Sproject();
console.log(p.getTask())