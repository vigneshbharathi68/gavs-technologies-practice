// write the function to convert current time to US time zone
function convertToUSTimezone(date) {
    // create Date object for current location
    var d = new Date(date);
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*'-4'));
    // return time as a string
    return nd.toLocaleString();
}

console.log(convertToUSTimezone(new Date()))

const user = {
    "userId": "dae1caa6-36f1-48bb-909d-f62301090c78",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InZpZ25lc2hiaGFyYXRoaSIsInBhc3N3b3JkIjoiVmlnbmVzaEAxMjMiLCJpYXQiOjE2NjgwNjEzMTB9.5VziP6hFNOSmIEg6a3Pq0uLXipBVaIbUF5alfHy4UGk",
    "expires": "2022-11-17T06:21:50.790Z",
    "status": "Success",
    "result": "User authorized successfully."
}