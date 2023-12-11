const myStory = (name: string, age: number, favouriteColor: string) =>
`My name is ${name}. I am ${age} old. My favourite colour is ${favouriteColor}`;

interface Person {
    name: string;
    pwd: number;
}

// const person: Person = {
//     name: 'greedy',
//     age: 0,
// }

class logIn {
    name: string;
    pwd: number;

    constructor(name: string, pwd: number) {
        this.name = name;
        this.pwd = pwd;
    }

    signIn = () => {
        console.log(`Hello! ${this.name} `)
    }
}

const person: Person = new logIn('anyanime', 50);

const person2: Person = new logIn('David', 9);

interface Axis {
    a: number;
    b: number;
}

const show = (c: Axis) => {
    console.log(`point a is ${c.a} and point b is ${c.b}`)

}

const fig = {a: 22, b: 36}
show(fig);

const multiply = (first: number, second: number) => {
    let product = first * second;
    console.log(product)
}

multiply(4, 6);

let things: any = {x: 0};

things.foo();
things.bar = 200;
things = 'God is good';
const o: number = things;

const printId = (id: number | string) => {
    console.log(`Your id is ${id}`);
};

printId(202);
printId('Promises');

const compliment = (id: number | string) => {
    typeof id === 'string' ? 
    console.log(`Hello &{id.toUpperCase()}! You are welcome to the club`) :   
    console.log(id);  
}



compliment('Anyanime');
compliment(101);





