
// - Create a new h1 element
// - Give it some textContent
// - Give it a class name of "header"
// - append it as a child of the div#root

// const h1 = document.createElement("h1");
// h1.textContent = "This is an impoerative way to program"
// h1.className = "header"

const page = (
    <div>
        <h1>This is JSX</h1>
        <p>This is paragraph</p>
    </div>
)
console.log(page)

ReactDOM.render(page, document.getElementById('root'))

