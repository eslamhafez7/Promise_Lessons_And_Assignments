/*
    [Promises (Async) - Try, Catch And Finally With Fetch] L187
*/


// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Hello Reslved Value");
//         reject(Error("faild to find http request"));
//     }, 3000);
// });
// async function getData() {
//     console.log("Before Promise");
//         try {
//             console.log(await myPromise);
//         } catch(reason) {
//             console.log(`Rejected: ${reason}`);
//         } finally {
//             console.log("After Promise");
//         }
// }
// getData();

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Reslved Value");
        // reject(Error("faild to find http request"));
    }, 3000);
});

async function fetchData() {
    console.log("Before Fetch")
    try{
        let myData = await fetch("https://api.github.com/users/eslamhafez7/repos");
        console.log(await myData.json());
    } catch(reson){
        console.log(`Rejected${(reson)}`);
    }finally{
        console.log("After Fetch")
    }
}
fetchData()