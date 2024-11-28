const firstname = "Michel";
const lastname = "Polnareff";
let age2 = 123;
const isUserLoggedIn = false;
const account = undefined;
let account2;
const myVar = null;
const user = {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
}
const colors = ['red', 'blue', 'green'];
const onSayHello = function sayHello() {
    return 'Hello';
}

console.log(typeof "Michel");
console.log(typeof "Polnareff");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof account2);
console.log(typeof null);
console.log(typeof {
    firstname: "Michel",
    lastname: "Polnareff",
    email: "mich-mich@pol.com"
});
console.log(typeof ['red', 'blue', 'green']);
console.log(typeof function sayHello() {
    return 'Hello';
});