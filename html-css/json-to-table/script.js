const table = document.querySelector('#table')
// Set the table header
// const url = 'https://jsonplaceholder.typicode.com/posts'
const inputFile = './input.json'

getJsonData()
async function getJsonData() {
    // const response = await axios.get(url)
    readTextFile(inputFile, function(text){
        var response = { data: JSON.parse(text)};
        const tableHeader = Object.keys(response.data[0])
        // create table header with the keys of the first object in the array
        const thead = document.createElement('thead')
        const tr = document.createElement('tr')
        tableHeader.forEach((item) => {
            const th = document.createElement('th')
            th.innerHTML = item
            tr.appendChild(th)
        })
        thead.appendChild(tr)
        table.appendChild(thead)
        // create table body
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)
        // create table rows with the values of the objects in the array
        response.data.forEach((item) => {
            const tr = document.createElement('tr')
            tableHeader.forEach((key) => {
                const td = document.createElement('td')
                td.innerHTML = item[key]
                tr.appendChild(td)
            })
            tbody.appendChild(tr)
        })
        
    });
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
