function full_sentence() { //concat method
    var p1 = "I love ";
    var p2 = "you!";
    var whole_sentence = p1.concat(p2);
    document.getElementById("concentrate").innerHTML = whole_sentence;
}

function slice_Method() { //slice method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("slice").innerHTML = Section.toUpperCase();
    document.getElementById("slice").innerHTML = Sentence.search("h");
}

function string_Method() { //string method
    var X =102; 
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //precision method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() { //fixed method
    var X = 12938.3012987376112;
    document.getElementById("Fixed").innerHTML = X.toFixed();
}

function value_Method() { //value method
    var X = 12938.3012987376112;
    document.getElementById("Value").innerHTML = X.valueOf();
}