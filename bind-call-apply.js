var john = {
    name : 'John',
    age: 26,
    job: 'Teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Hello!' + 'Good' + timeOfDay)
        } else if (style === 'friendly'){
            console.log('Hello Buddy Good ' + timeOfDay + '. I\'m ' + this.name + 'I\'m '+ this.age + ' of old' )
        }
    }
}

john.presentation('friendly','afternoon');