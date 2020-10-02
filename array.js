lunchArray = [`Burger`, `Salad`, `Lasagna`, `Sushi`, `Meatloaf`];
console.log(lunchArray);
let longest = lunchArray.reduce((a, b) => (a.length >= b.length ? a : b));
console.log(longest);
let length = longest.length;
console.log(length);

lunchArray2 = [`Burger Salad Lasagna Sushi Meatloaf`];

let str = lunchArray2.join();
console.log(str);

let str2 = str.split(` `);
console.log(str2);

let longest2 = str2.reduce((a, b) => (a.length >= b.length ? a : b));
console.log(longest2);

let length2 = longest2.length;
console.log(length2);
