## Creating an Object
### Object literal


### Object constructor




var person = {
    name = "Jason",
    age = "29",
    city = "Vancouver"
};

//or make an empty object and then add fields to it
var person = {}
person.name = 

// or using a constructor
var person = new Object();
person.name = 

//the key of an object can be of any type

// no comma for last field

retrieve value

## properties

//bracket
person["city"];

//dot notation
person.city;


//not a good practice, use camel case instead

## modify value


## method
var obj = {
    add: function(x, y){
        return x + y;
    }
}


## `this` Keyword
comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    });
};
