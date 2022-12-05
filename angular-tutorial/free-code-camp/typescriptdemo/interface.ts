export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let { name: userName, email: userLogin }: User = {
    name: 'John',
    id: 1,
    email: 'john@gmail.com'
}

console.log(userName, userLogin);


interface Employees extends User {
    salary: number;
}

let employee: Employees = {
    name: 'John',
    id: 1,
    email: 'john@gmail.com',
    salary: 1000
}

export interface Login {
    Login(): User;
}

// Create a users array with generic type
let [user1, user2, ...restUsers]: Array<User> = [
    { name: 'John', id: 1, email: ''},
    { name: 'John1', id: 2, email: ''},
    { name: 'John2', id: 3, email: ''}
]

console.log(user1, user2);
console.log(restUsers);
