/*
    [Promises - Await and Training] L186
    => await works only inside the async functions
    => await make the javascript wait for the promise result
    => await is more elegant syntax of getting promise result
*/

const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("I'm the good promise");
    }, 3000);
});
function getdata() {
    console.log("Before promise ")
    myPromise.then((resvalue) => console.log(resvalue));
    console.log("After promise ")
}

// let myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         // res("I'm the good promise");
//         rej(Error("I'm the bad promise"));
//     }, 3000);
// });
// async function readData () {
//     console.log("Before Promise");
//     // myPromise.then((resval) => console.log(resval));
//     // console.log(await myPromise.then((resval) => resval));
//     console.log(await myPromise.catch((err) => err));
//     console.log("Before Promise");
// }
// readData();

// let myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res ("I'm a good promise")
//     }, 3000)
// })
// async function getdata() {
//     console.log("Before Promise");
//     const resvalue = await myPromise;
//     console.log(resvalue);
//     console.log("After Promise");
// }
// getdata();

