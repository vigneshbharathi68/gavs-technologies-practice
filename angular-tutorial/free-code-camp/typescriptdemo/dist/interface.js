"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: 'John',
    id: 1,
    email: 'john@gmail.com'
};
console.log(userName, userLogin);
let employee = {
    name: 'John',
    id: 1,
    email: 'john@gmail.com',
    salary: 1000
};
// Create a users array with generic type
let [user1, user2, ...restUsers] = [
    { name: 'John', id: 1, email: '' },
    { name: 'John1', id: 2, email: '' },
    { name: 'John2', id: 3, email: '' }
];
console.log(user1, user2);
console.log(restUsers);
//# sourceMappingURL=interface.js.map