var john = {
    name : 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Hello! ' + 'Good ' + timeOfDay + ' Ladies and Gengle man.' + 'I\'m ' + this.name + ' I\'m a ' + this.job + ' I\'m ' + this.age + 'years of old.' )
        } else if (style === 'friendly'){
            console.log('Hi Buddy Good ' + timeOfDay  +  '. I\'m ' + this.name + '. I\'m a ' + this.job + '. I\'m ' + this.age + ' years of old.' )
        }
    }
}

var emaily = {
    name: "Emaily",
    age: 23,
    job: 'Designer',
}

var tariqul = {
    name: "Tariqul",
    age: 56,
    job: 'Bekar',
}

var raj = {
    name: "Tariqul",
    age: 56,
    job: 'Bekar',
}

john.presentation('friendly','afternoon');

john.presentation.call(emaily,'formal','Morning');
john.presentation.call(tariqul, 'friendly','Night');
john.presentation.call(raj,'formal','শুভ সকাল');  

//john.presentation.apply(john, ['formal','morning']);

var johnFrindly = john.presentation.bind(john, 'friendly');

johnFrindly('Night Haters');
johnFrindly('Afternoon');


var emailFormal = john.presentation.bind(emaily, 'formal');

emailFormal('Morning');
emailFormal('Afternoon');


var years = [1990,1965,1937,2005,1998];

function arrayCalc (arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push( fn(arr[i]) );
    }
    
    return arrRes;
}

function calculateAge (el){
    return (2016 - el);
}

function isFullage (limit, el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);

//var fullAges = arrayCalc(years,isFullage);
fullJapan = arrayCalc(ages, isFullage.bind(this, 40));


console.log(ages);
console.log(fullJapan);



