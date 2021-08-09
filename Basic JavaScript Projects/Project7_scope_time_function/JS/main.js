var X = 80; //GLOBAL VARIABLE
var Y = 70;

function get_Date() {       //FUNCTION TO TELL YOU GOOD DAY IF IT ISNT NIGHT
    if (new Date().getHour() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    console.log("test")
    }
}

function number() {        //FUNCTION TO TELL WHICH GLOBAL VARIABLE IS GREATER, X OR Y
    if (X > Y) {
    document.getElementById("Greeting2").innerHTML = "X is greater then Y."
    }
    else {
    document.getElementById("Greeting2").innerHTML = "X is less then Y."
    }
}

function Time_function() {      //FUNCTION TO TELL TIME
    var Time = new Date().getHours();   //LOCAL VARIABLE
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
