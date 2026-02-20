const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi. I am ' + this.name);
    }
};

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);
// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking', 1, true];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // for(let hobby of hobbies)
// // {
// //     console.log(hobby);
// // }

// hobbies.push('Programming')
// //const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies]; //spread operators
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1,2,3, 4));