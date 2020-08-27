/*
var john = {
    name : 'john',
    yearOfBirth : 1957,
    job: 'farmer'
}
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}

Person.prototype.ageCalculate = function(){
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = "Gurochor";
Person.prototype.hobby = "Sports";

var john = new Person('Maksud', 1991, 'farmer');
var jane = new Person('Jane', 2003, 'Designer');
var tariq = new Person ('Tariq', 1990, 'Developer');
//console.log(john);

john.ageCalculate();
jane.ageCalculate();
tariq.ageCalculate();
console.log(john.name + " " +  john.lastName);
console.log(jane.name + " " +  jane.lastName + "   " + jane.hobby);

//console.log(tariq.name + " " +  tariq.lastName);


var marks = 70;

var johnResult = {
    name: "John",
    board: "CTG",
}

function change1(a,b){
    a = 42;
    b.board = "Columbo";
}

change1(marks,johnResult);
console.log(marks);
console.log(johnResult.board);


//Passing functions as arguments

var years = [1990,1965,1937,2005,1998];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr . length; i++){
        arrRes.push( fn(arr[i]) );
    }
    
    return arrRes;
}

function calculateAge (el){
    return (2016 - el);
}

function isFullage (el){
    return el >= 18;
}

//var ages = arrayCalc(years,calculateAge);

var fullAges = arrayCalc(years, isFullage);

//console.log(ages);
console.log(fullAges);


// ************************************************
Function returning Function

function interviewQuestion(job){
    if(job === 'developer'){
        return function (name){
            console.log(name + ', Do you know Proggramming?');
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you want to teach, ' + name + '?' );
        }
    }else{
        return function(name){
            console.log('Hello' + 'What do you do?' + name);
        }
    }
}

var teacherQuestions = interviewQuestion('teacher');
teacherQuestions('Mir Sab');

var developerQuestion = interviewQuestion('developer');

developerQuestion('Ehsan');
developerQuestion('Mark');
developerQuestion('Mathew');
developerQuestion('Tariq');
developerQuestion('Shohag');
developerQuestion('Dilsah');

interviewQuestion('teacher')('Ripa');
interviewQuestion('teacher')('Eva');
interviewQuestion('teacher')('Nipa');


/*==============================================
    Lecture IIFE
*/
/*
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})();

*/
/*==============================================
    Excuation Context
*/
/*
var name = "Mohammad Sorif";

function A(){
    B();
    var a = "I'm function A";
    console.log(a);
}

function B(){
    C();
    var b = "I am function B";
    console.log(b);
}
function C(){
    var c = "Hello " + name + "Hossain";
    console.log(c);
}

A();
*/

/*==============================================
    Scope Chain
*/
/*
var a = 300;
var x = 150;
function A(){
   // var a = 400;
    console.log(a);
    function X(){
        console.log(a+y);
        function Y(){
            var y = 25.50
            
        }

    }
    X();
}
A();


*/

function retirement(retirementAge){
    var a = ' Years left to retire';
    return function (yearOBirth){
        var age = 2020 - yearOBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUK = retirement(59);

retirementUK(1991);

function retire (retireAge){
   var a = ' years left from retirement';
   
   return function(yearOfBirth){
       var age = 2020 - yearOfBirth;
       console.log(retireAge - age + a);
   }
}

var retireBD = retire(59);
var retireUS = retire(65);
var retireUK = retire(66);
retireBD(2002); 
retireUS(2002);
retireUK(2000);



function interview (job){
    return function(name){
        if(job === 'photographer'){
            console.log(
                name + ' How many years do you worked as photographer ?'
            );
        } else if (job === 'teacher'){
            console.log('Which subject do you want to read, ' + name + '?');
        } else{
            console.log('What do you want to do ' + name + '?');
        }
    }
}

interview('photographer')('joe die ske');
interview('teacher')('Tariqul Islam');
interview()('Tauhid Islam');
interview('photographer')('Rifat Hasan');
interview('akke')('teac');