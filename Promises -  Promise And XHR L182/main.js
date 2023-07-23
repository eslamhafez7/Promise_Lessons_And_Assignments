/*
    [Promises -  Promise And XHR] L182   
*/

// const getData = function(apiLink) {
//     return new Promise((resolved, rejected) => {
//         let myrequest = new XMLHttpRequest();
//         myrequest.onload = function() {
//             if(this.readyState === 4 && this.status === 200) {
//                 resolved(JSON.parse(this.responseText))
//             }else {
//                 rejected(Error(`HTTPS status code is ${this.status}`))
//             }
//         }
//         myrequest.onerror = function() {
//             rejected(Error("Network error occurred"));
//         };
        
//         myrequest.open("GET", apiLink);
//         myrequest.send();
//     });
// };
// getData("https://api.github.com/users/eslamhafez7/repos")
// .then(
//     (result) => {
//         result.length = 10;
//         return result;
//     }
// )
// .then((result) => {
//     console.log(result[0].id)
// })
// .catch((rej) => console.log(rej));

// Trying one more time to understand clearly
function getData(apiLink) {
    return new Promise((resolve, reject) => {
        
let myRequest = new XMLHttpRequest();
myRequest.onload = function () {
    if(this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(myRequest.responseText));
    }else {
        reject(Error("Connection Faild"));
    }
}
    myRequest.open("GET", apiLink);
    myRequest.send();
    });
}
getData("https://api.github.com/users/eslamhafez7/repos").then(
    (result) => {
        result.length = 10;
        return result;
    }
).then(
    (result) => console.log(result[0].name)
).catch((rej) => console.log(rej));
