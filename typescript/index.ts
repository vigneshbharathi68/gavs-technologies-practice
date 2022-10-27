// Types in Type script
// let sales: number = 123_456_789;
// let course: 'Typescript';
// let is_published: boolean = true;
// let level;

// function render (document: any) {
//     console.log(document);
// }

// let numbers: [number, string] = [ 1, "Vignesh" ]
// function calculateTax(income: number, taxYear: number): number {
//     if(taxYear < 2022) 
//         return income * 1.2;
//     return income * 1.3;
// }

// calculateTax(10_000, 2022)

// Objects
// let employee: {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {id: 1, name: "Josh", retire: (date: Date) => {console.log(date)}}

// Advanced types
// Type aliases
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {id: 1, name: "Josh", retire: (date: Date) => {console.log(date)}}

// Union Types
// function kgToLbs(weight: number | string): number {
//     if (typeof weight === 'number')
//         return weight * 2.2
//     else 
//         return parseInt(weight) * 2.2; 
// }

// Intersection Type
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// Nullable Types
function greet(name: string | null | undefined ) {
    if (name)
        console.log(name.toUpperCase())
    else 
        console.log('Hola')
}

greet(null);

// Optional Changing
type Customer = {
    birthday: Date
};

function getCustomer(id: number) : Customer | null {
    return id === 0 ? null: {birthday: new Date()}
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday)