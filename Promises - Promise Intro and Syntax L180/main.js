/*
    [Promises - Promise Intro and Syntax]
    - Promise in Javascript is like promise in real lifa
    - Promise is something that will happen in the future
    - Promise avoid callback hell
    - Promis is an object that represents the status of an asynchronous operation
    Promis Status {
        1- Pending: Initial state
        2- Fullfilled: Completed Successfuly
        3- Rejected: Faild 
    }
    {
        - Once a promise has been called, it will start in the pending state
        - The crated promise will eventually end in a resolved state or in a rejected state 
        - Calling the callback functions (Passred to then, catch) Upon finishing 
    }
    then {
        takes to optional arguments (resolvearg => success, rejectarg => faild)
    }
*/



// const myPromise = new Promise(function(resolvedState, rejectedState) {
//     let connect = true;
//     if(connect) {
//         resolvedState("Connection Established");
//     }else {
//         rejectedState(Error("Connection Faild"));
//     }
// }).then(
//     (resolvedValue) => console.log(`Great, ${resolvedValue}`), // => Onfulfilled => resolvedState
//     (rejectedValue) => console.log(`Ohh Shit, ${rejectedValue}`) // => Onrejected => rejectedState
// );
// console.log(myPromise);


const myPromise = new Promise((resolved, rejected) => {
    let connect = true;
    if(connect === true) {
        resolved("Connection Established Successfully");
    }else {
        rejected(Error("Connection Faild"));
    }
});

// If you want to render the state of the connection directly
// myPromise.then(
//     (resolvedValue) => console.log(`Great, ${resolvedValue}`),
//     (rejectedValue) => console.log(`Ohh Shit, ${rejectedValue}`)
// );
// console.log(myPromise);

// Store all values in variable

let solving = (resolvedValue) => console.log(`Great, ${resolvedValue}`);
let reject = (rejectedValue) => console.log(`Ohh Shit, ${rejectedValue}`);

myPromise.then(solving, reject);
console.log(myPromise);








const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve(randomNumber);
    } else {
        reject("Number is less than 0.5");
    }
    }, 1000);
});

promise.then ((result) => {
        console.log("Promise fulfilled with result:", result);
    })
    .catch ((error) => {
        console.log("Promise rejected with error:", error);
    });