const name = 'Max'; //cannot changes
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobbies) =>
{
    
    return ('Name is ' + userName + ", age is " + userAge + ' , has Hobbies : ' + hasHobbies);
}

const add = (a,b) =>{
    return a + b;
}

const addOne = a => a + 1;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies))

console.log(add(1,3));

console.log(addOne(2));

console.log(addRandom());