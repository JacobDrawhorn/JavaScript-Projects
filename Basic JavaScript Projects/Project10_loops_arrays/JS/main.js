function Call_Loop() { //while loop that counts to 10
    var X = "";
    var Y = 1;
    while (Y < 11) {
       X += "<br>" + Y;
       Y++;
    }
    document.getElementById("Loop").innerHTML = X;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //loops through an array of instruments
var Content = "";
var Y;
    
function for_loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("Lists_of_Instruments").innerHTML = Content;
}

function array_Function() { //array function
    var number = [];
    number[0] = "1";
    number[1] = "2";
    number[2] = "3";
    document.getElementById("Array").innerHTML = "This is the number " + 
        number[2] + ".";
}

function constant_function() { //constant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
        
}

function getRectArea(width, height) { //function that logss area of rectangle
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));
  // expected output: 12
  
  console.log(getRectArea(-3, 4));
  // expected output: 0

let car = { //let function
    make: "Fiat ", 
    model: "500 ",
    year: "2015 ",
    color: "grey ",
    description : function() {
        return "The car is a " + car.year + car.color + car.make + car.model;
        }
};
document.getElementById("Car_Object").innerHTML = car.description();
