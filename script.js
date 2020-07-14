var john = {
    name: 'John',
    age: 30,
    yearOfBirth: 1990,
    job: 'teacher',
}

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
   
}
Person.prototype.calculateAge = function(){
    console.log(2021 - this.yearOfBirth);
}

Person.prototype.lastName = "Gurochor";


var john = new Person('sajbi', 1991, 'farmer');
var jane = new Person('Jane', 2003, 'Designer');
var tariq = new Person ('Tariq', 1990, 'Developer');
//console.log(john);

john.calculateAge();
jane.calculateAge();
tariq.calculateAge();
console.log(john.name + " " +  john.lastName);
console.log(jane.name + " " +  jane.lastName);
console.log(tariq.name + " " +  tariq.lastName);