const myExpense = {
    tasmac: [ 510, 300, 480 ],
    clothes: [ 3900 ],
    otherExpense: [ 410, 301 ]
}

const hariExpense = {
    clothes: [2499, 2499, 4105]
}

let myExpenseTotal = myExpense.tasmac.reduce((a, b) => a + b, 0) + myExpense.clothes.reduce((a, b) => a + b, 0) + myExpense.otherExpense.reduce((a, b) => a + b, 0)
let hariExpenseTotal = hariExpense.clothes.reduce((a, b) => a + b, 0)
let totalCreditLimit = myExpenseTotal + hariExpenseTotal
// Mine: 5901 7000
// Hari: 9,105 8000
console.log({myExpenseTotal, hariExpenseTotal, totalCreditLimit})