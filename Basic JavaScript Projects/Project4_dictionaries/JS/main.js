function my_Dictionary() {                                              // define function "my_Dictionary"
    var star = {                                                        // create a kvp set with the star variable
        Type: "Red Giant",
        Color: "Red",
        Size: "Giant",
        Transformation: "Black Hole",
    };
    delete star.Type;                                                    // delete the Type.star kvp
    document.getElementById("Dictionary").innerHTML = star.Type;         
}