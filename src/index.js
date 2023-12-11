var myStory = function (name, age, favouriteColor) {
    return "My name is ".concat(name, ". I am ").concat(age, " old. My favourite colour is ").concat(favouriteColor);
};
// const person: Person = {
//     name: 'greedy',
//     age: 0,
// }
var logIn = /** @class */ (function () {
    function logIn(name, pwd) {
        var _this = this;
        this.signIn = function () {
            console.log("Hello! ".concat(_this.name, " "));
        };
        this.name = name;
        this.pwd = pwd;
    }
    return logIn;
}());
var person = new logIn('anyanime', 50);
var person2 = new logIn('David', 9);
var show = function (c) {
    console.log("point a is ".concat(c.a, " and point b is ").concat(c.b));
};
var fig = { a: 22, b: 36 };
show(fig);
var multiply = function (first, second) {
    var product = first * second;
    console.log(product);
};
multiply(4, 6);
var things = { x: 0 };
things();
things.foo();
things.bar = 200;
things = 'God is good';
var o = things;
var printId = function (id) {
    console.log("Your id is ".concat(id));
};
printId(202);
printId('Promises');
var compliment = function (id) {
    typeof id === 'string' ?
        console.log("Hello &{id.toUpperCase()}! You are welcome to the club") :
        console.log(id);
};
compliment('Anyanime');
compliment(101);
