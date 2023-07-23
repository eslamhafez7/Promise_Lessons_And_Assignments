/*
    [Fetch API] L183
    => Return a representaion of the entire HTTP request
*/

fetch("https://api.github.com/users/eslamhafez7/repos").then((result) => {
    console.log(result);
    let data = result.json(); // return Promise
    console.log(data);
    return data;
}).then((hi) => {
    hi.length = 10;
    console.log(hi)
    return hi;
}).then(
    (fin) => {
        console.log(fin[2].name);
    }
).catch(
    (rej) => [
        console.log(Error("Connection Rejected"))
    ]
).finally(
    console.log("Operation Finished Successfully")
);