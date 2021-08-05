function Mathematics() { //demonstration of basic math operators//
    var sum = 4 + 3 / 4 * 5 - 2;
    document.getElementById("Math").innerHTML = sum;
}

function modulus_operator() { //function that finds the remainder when deviding 6 by 4
    var modulus = 6 % 4;
    document.getElementById("Math2").innerHTML = "When you devide 6 by 4 you get a"
    + "remainder of: " + modulus;
}

function increment_decrement() { 
    var X = 5; //sets variable (X) to 5
        X++; //perfomes increment operator on X
    var Y = 5; //sets variable (Y) to 5
        Y--; //performs decrement operator on Y
    document.getElementById("Math3").innerHTML = X + Y; //prints the result which is 6 + 4
}

function random() { //finds random number between 0 and 100
    var Z = Math.random() * 100;
    document.getElementById("random").innerHTML = "random number between 0 and 100 is:" + Z;
}

