function Vote_Function() {                                                  // creates function
    var Age, Can_vote;                                                      // creates 2 variables (age and can_vote)
    Age = document.getElementById("Age").value;                             // displays age
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";       // creates a logic function to deduce if person is too young or not
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";     // displays result
}

function vehicle(make, model, year, color) {                                // creates constructor function
    this.vehicle_make = make;                                               // creates 4 constructors
    this.vehicle_model = model;                                             
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var Jacob = new vehicle("fiat", 500, 2015, "grey");                         // creates variable (Jacob) with assigned constructors
function my_function() { 
    document.getElementById("New_and_This").innerHTML =                     // prints constructors within sentence
    "Jacob drives a " + Jacob.vehicle_color + "-colored " + Jacob.vehicle_make + " " + Jacob.vehicle_model + " manufactured in " + Jacob.vehicle_year;
}

function count_Function() {                                                 // create function
    document.getElementById("Nested_Function").innerHTML = Count();         
    function Count() {
        var Starting_point = 56;
        function Plus_one() {Starting_point += 1;}                          // creates function starts at number 56 and adds 1 to get a result of 57
        Plus_one();
        return Starting_point;
    }
}