/*
    [Promises] L184
    - all
    - allSettled
    - race
*/

let promiseone = new Promise((res, rej) => {
    setTimeout(()=> {
        res("This is promise one")
    }, 1000);
});

let promisetwo = new Promise((res, rej) => {
    setTimeout(()=> {
        rej("This is promise two")
    }, 500);
});

let promisethree = new Promise((res, rej) => {
    setTimeout(()=> {
        res("This is promise three")
    }, 3000);
});

Promise.all([promiseone, promisetwo, promisethree]).then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
Promise.allSettled([promiseone, promisetwo, promisethree]).then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
Promise.race([promiseone, promisetwo, promisethree]).then(
    (resolvedValue) => console.log(resolvedValue),
    (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);