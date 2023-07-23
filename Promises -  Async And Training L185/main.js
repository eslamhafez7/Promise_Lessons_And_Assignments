/*
    [Promises -  Async And Trainin] L185
    => async before function means that function will return promise
    => asyns and await help to make asynchronous promise behaviour with cleaner style  
*/

// function getData () {
//     return new Promise((res, rej) => {
//         let users = ["Eslam", "Osama"];
//         if(users.length > 4) {
//             res("Users found");
//         }
//         rej("No Users");
//     });
// };

// getData().then(
//     (resolvValue) => console.log(resolvValue),
//     (rejectedValue) => console.log(rejectedValue)
// )


// function getData () {
//         let users = ["Eslam", "Osama"];
//         if(users.length < 4) {
//             return Promise.resolve("Users found");
//         }
//             return Promise.reject("No Users");
// };

// getData().then(
//     (resolvValue) => console.log(resolvValue),
//     (rejectedValue) => console.log(rejectedValue)
// )

async function getData () {
        let users = ["Eslam", "Osama"];
        if(users.length < 4) {
            return ("Users found");
        }
            throw new Error("No users found")
};
console.log(getData());
getData().then(
    (resolvValue) => console.log(resolvValue),
    (rejectedValue) => console.log(rejectedValue)
)


function getData () {
    return new Promise((res, rej) => {
        let users = ["Eslam"]
        if(users.length > 0) {
            res("Users Found");
        }else {
            res("NO Users Found");
        }
    });
};

getData().then(
    (resvalue) => console.log(resvalue),
    (rejvalue) => console.log(rejvalue)
)


function getData() {
        let users = []
        if(users.length > 0) {
            return Promise.resolve("Users Found")
        }else {
            return Promise.resolve("No Users Found")
        }
}
getData().then(
    (resvalue) => console.log(resvalue),
    (rejvalue) => console.log(rejvalue)
).catch((reason) => console.log(Error(reason))).finally(console.log("Done"));


async function getData() {
    let users = ["Osama"];
    if(users.length > 0) {
        return ("Users Found");
    }else {
        throw Error("HTTP Error Happened");
    }
}
getData().then(
    resvalue => console.log(resvalue),
    rejvalue => console.log(rejvalue)
).catch(
    (reason) = function() {console.log(reason)}
).finally(
    console.log("Operation Done")
    )
    console.log(getData());