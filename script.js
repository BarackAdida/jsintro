// const basicSalary = parseFloat(prompt("Enter basic salary:"));
// console.log(parseFloat("12.57")); // Output: 12.57
// console.log(parseFloat(" 12 ")); // Output: 12
// console.log(parseFloat("12 years")); // Output: 12
// console.log(parseFloat("12H")); // Output: 12
// console.log(parseFloat("H12")); // Output: NaN
// // Prompt the user for input
// const userInput = prompt("Enter a number:");
// const inputNumber = parseFloat(userInput);

// // Check if the input is a valid number
// if (isNaN(inputNumber)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else {
//     // Perform a calculation (e.g., double the input value)
//     const result = inputNumber * 2;
//     console.log(`Result: ${result}`);
// }

// let page = ['a', 'b', 'c']
// console.log(page)
// let book = {
//     Auther : 'Lexicon',
//     Owner : 'Comrade',
//     Class : 'Yellow'
// }
// // console.log(book.Auther)
// //  not: incomplete codes
// // function studentSignin(name, age) {
// //     console.log("Adida")
// //     return name, age;
// //     function age(DOB, currentYear) {
// //         console.log(age("2005", "2024"))
// //         return currentYear - DOB
// //     }
// // }
// // ()invocation operator
// // function that takes four number parameters and computes the sum
// function computeSum(num1, num2, num3, num4){
//     return num1 + num2 + num3 + num4;
// }
// var sum = computeSum(3,4,2,1)
// // console.log("The sum is:", sum);
// console.log(`The sum is ${sum}`)

// Sum("3", "4", "2", "1")

// function sum(num1, num2, num3, num4) {
//     console.log(`The sum is ${num1 + num2 + num3 + num4}`);
// }
// sum(3, 4, 2, 1)

// function sum(num1, num2, num3,num4) {
//     const addfournumbers = num1 + num2 + num3 + num4;
//     return addfournumbers;
// }
// console.log(sum(2, 3, 4, 5));
// console.log(sum(20, 30, 40, 50));
// console.log(sum(22, 33, 44, 55));
// console.log(sum(25, 34, 43, 52));

// console.log('Pour milk in the sufuria');
// console.log('Add three cups of water');
// console.log('Turn on the gas/cooker');
// console.log('Add tea leaves');
// console.log('Let it boil for 7 minutes');
// console.log('Put in a flask and server while hot');

// function makeHotBeverage(typeOfBeverage, typeOfStove){
//     console.log('Pour milk in the sufuria');
//     console.log('Add three cups of water');
//     console.log(`Turn on the ${typeOfStove}`);
//     console.log(`Add ${typeOfBeverage}`);
//     console.log('Let it boil for 7 minutes');
//     console.log('Put in a flask and server while hot');

// }
// makeHotBeverage("Coffee", "gas")

// // function invocation
// makeHotBeverage()
// console.log('#####');
// mmakehotBeverage()
// console.log('#####');

// var name = 'Adida barack';

// let firstName = 'Adida';
// let lastname = 'Barack';

// const emailAddress = 'adidabarackpilly@gmail.com';
// const age = 18;

// const DATE_OF_BIRTH = 2005;

// console.log(firstName);
// console.log(lastname);
// console.log(emailAddress);
// console.log(DATE_OF_BIRTH)
// // const btn = document.querySelector("#button");

// // btn.addEventListener('click', () => )

// // if function
// // const worth = document.querySelector('#netvalue');
// //worth.innerHTML = `The sum is ${sum(5, 5)}`;


// // const car = false;
// const netWorth = 2000;

// if(netWorth > 1000000) {
//     const newnetWorth = networth + 1000;
//     `i am rich. i have a networht of ${newnetWorth}shillings`
//  } else {
//         `i am PerformanceObserver. My networth is${newnetWorth}shillings`;
//     }

// // ternary expressions
// // const netWorth = 2000;
// netWorth > 10000000
// ? console.log('I am rich')
// : console.log(`I am poor. My networth is ${netWorth}shillings`);

// const mathgrade = 'B';

// const message = 
// mathgrade === 'A' 
// ? 'Excellent work'
// : mathgrade === 'B'
// ? 'Good work'
// : mathgrade === 'C'
// ? 'Nice try, Average and aim higher'
// : mathgrade === 'D'
// ? 'Below average, can do better'
// : mathgrade === 'E'
// ? 'Call your parents!!'
// : 'You are suspended!!';

// console.log(message);


// // switch statements
// switch (mathgrade) {
//     case 'A':
//         console.log('Excellent work')
//         break;
//     case 'B':
//         console.log('Nice try')
//         break;
//     case 'C':
//         console.log('Average')
//         break;
//     case 'D':
//         console.log('Can do better')
//         break;
//     case 'E':
//         console.log('Call Your Parents!!')
//         break;
//     default:
//         console.log('You are suspended!!')       
// }
// // CRUD operations in arrays
// // CREATE
// const names = ['Barack', 'Adida', 'Pilly', 'Others', 'Hermione', 'Harry']
// const studNumbers = ['34','46', '35', '28', '38']

// // UPDATE
// names[3] = 'Lapilly';

// // READ
// console.log(studNumbers[3])
// console.log(names[3])

// const namesv1 = ['Barack', 'Adida', 'Pilly', 'Others', 'Hermione', 'Harry']

// //()push
// namesv1.push("Baracko", "Extortionista")

// //unshift()
// namesv1.unshift("Extortionist")

// //spread operator(...)
// const namesv3 = ["Bob", "Hellen", "Becky", "Hillary", "Brian", "Jacquelyn", ...namesv1]
// names = [...namesv1, ...namesv3, "Paul"]
// console.log(names)
// console.log(names.length)

// //pop() and shift()
// const namesv2 = ['Barack', 'Adida', 'Pilly', 'Others', 'Hermione', 'Harry']
// namesv2.pop()
// namesv2.shift()
// console.log(namesv2)

// const namesv4 = ['Barack', 'Adida', 'Pilly', 'Others', 'Hermione', 'Harry']
// namesCopy = namesv4.slice()
// console.log(namesv4.slice())
// console.log(namesv4.slice(4))
// console.log(namesCopy)
// console.log(namesCopy.slice(2, 5))
// console.log(namesv3.slice(-1))

// //creating objects
// //CRUD operations on objects

const person = {
    firstname: "Barack",
    lastname: "Adida",
    school: {
        name: "Moringa School Limited",
        course: {
            name: "Software Engineering",
            type: "Hybrid",
            class: "Infernos",
            
        },
        techMentor: "Eric Mong'are",
    },
    friends: [
        "Lapilly",
        "Extortionista",
        "Extortionist"
    ],
    age: "18",
    gender: "Male",
    isRich: true,

};
// console.log(person)

// function test(position, name, age) {
//     return `${position}, ${name}, ${age}`
// }
// console.log(test(1, "Adida Barack", 18))
// //READ
// //dot notation || member access operator
// console.log(person.firstname)
// console.log(person.lastname)
// console.log(person.friends)
// console.log(person.age)
// //accessing object inside object in object
// console.log(person.school.course)
// //traversing technique
// console.log(person.friends[2])
// console.log(person.school.course.class)

// //bracket notation
// console.log(person["isRich"])

// //UPDATE/ modify
// const network = {};
// network.firstname = 'Baracko';
// network.lastname = 'Brian';
// network.friends = ['Becky', 'Ian', 'Jack']
// network.career = 'Software Engineering';
// network.career = 'Pille'

// console.log(network);
