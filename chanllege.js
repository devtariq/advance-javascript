/*
(function(){

    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function (){
        console.log(this.question);
        for( i = 0 ; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i])
        }
    }
    
    Question.prototype.answerCheck = function(ans){
        if(ans === this.correct){
            console.log('Correct Answer!')
        }else{
            console.log('Wrong Answer. Please try again')
        }
    }
    
    
    var q1 = new Question('Is javascript the coolest language of the world?',['yes','no'], 0);
    var q2 = new Question('Who is the course instructor of Javascript? ', ['jonas','john','emaily'], 0);
    var q3 = new Question('What does best describe coding?',['boring','hard','fun','tedius'],2);
    
    var questions = [q1,q2,q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    
    var answer = parseInt( prompt('Select the answer options'));
    
    questions[n].answerCheck(answer);
})();
*/
(function(){
    function Question(question, answers, correct){
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i])
        }
    }

    Question.prototype.answerCheck = function(ans,callback){
        var sc;
        if(ans === this.correct){
            console.log('Correct Answer');
            sc = callback(true);
        }else{
            console.log('Wrong Answer');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score){
        console.log('Your Current Score is ' + score);
        console.log('--------------------------------------------');
    }


    var q1 = new Question ('Who is the best Man in the world?',['M Sm','Kirsho','Netaji'], 0);
    var q2 = new Question ('Wisden Player of the Year? ', ['Sakib','Edward','Clark'],0);
    var q3 = new Question ('Capital of Bangladesh',['CTG','Dhaka','Khulna'], 1);
    var q4 = new Question ('Who is the Writer of Shanama',['Al Mahmud','Kaykobad','Abdul Gaffer'], 1);

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    var questions = [q1,q2,q3,q3];

    function nextQuestion(){
    
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion(); 
    
        var answer2 = prompt('Please Select the Correct Answer');

        if( answer2 !== 'exit'){

            questions[n].answerCheck( parseInt(answer2), keepScore );

            nextQuestion();
        }
    
    }

    nextQuestion();
    
})();

   
