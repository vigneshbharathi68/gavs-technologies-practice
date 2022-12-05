// import { Login, User } from './interface';
import * as LoginUser from './interface';
interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

class Employee implements LoginUser.Login {
    #id: number;
    name: string;
    address: string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    Login(): LoginUser.User {
        return {name: 'John', id: 1, email: ''};
    }

    static getEmployeeCount() : number{
        return 50;
    }

    get empId() {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    getNames() {
        return `${this.name} stays at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor (id: number, name: string, address: string) {
        super(id, name, address);
    }
}
console.log(Employee.getEmployeeCount());

let john = new Employee(1, 'John', '123 Main St');
let Giri = new Manager(2, 'Giri', '456 Main St');
let address = john.getNames();
// john.id = 1;
// john.name = 'John';
// john.address = 'Highway 71';
john.empId = 100;
console.log(john.empId);
console.log(Giri.getNames());
