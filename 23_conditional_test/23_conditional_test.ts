// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.

//Mark Sheet:
let english: number = 65;
console.log("Am I passed in Enlish?");
console.log(english === 29); //false

let maths: number = 98;
console.log("Am I passed in Maths?");
console.log(maths === 98); //true

let chemistry: number = 85;
console.log("Am I passed in chemistry?");
console.log(chemistry === 35); //false

let physics: number = 89;
console.log("Am I passed in physics?");
console.log(physics === 45); //false

let urdu: number = 69;
console.log("Am I passed in Urdu?");
console.log(english === 69); //true

let computer: number = 91;
console.log("Am I passed in Urdu?");
console.log(english === 91); //true

//Cars
let Cars: string[] = ["Corolla", "Civic", "rebirth", "Reborn", "Mehran"];
console.log("Is Corolla your favorite car ? I predict true");
console.log(Cars.includes("Corolla"));
console.log("Is rebirth your favorite car ? I predict true");
console.log(Cars.includes("rebirth"));

//Age
let age: number[] = [25, 26, 28];
console.log("Your age is 15?I predict false");
console.log(age.includes(15));
console.log("Your age is 17?I predict false");
console.log(age.includes(17));
