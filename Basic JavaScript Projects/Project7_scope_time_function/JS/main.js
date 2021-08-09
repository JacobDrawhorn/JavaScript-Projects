var X = 80;
var Y = 70;

function get_Date() {
    if (new Date().getHour() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    console.log("test")
    }
}

function number() {
    if (X > Y) {
    document.getElementById("Greeting2").innerHTML = "X is greater then Y."
    }
    else {
    document.getElementById("Greeting2").innerHTML = "X is less then Y."
    }
}

function Time_function() {
    var Time = new Date().getHours();
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
