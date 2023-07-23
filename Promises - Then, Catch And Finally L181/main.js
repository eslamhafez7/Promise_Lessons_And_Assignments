/*
    [Promise - Then, Catch And Finally] L181
    We are going to a meeting, My friend promissed me that we'll find 4 employess
        .then(We will choose to people)
        .then(We will test them and we are going to choose just 1 of them)
        .catch(No one came)

    1- then () => onfulfilled
    2- catch () => onrejected
    3- finally () => Code to be executed regardless of the Promise being resolved or rejected
*/


let myPromise = new Promise((resolved, rejected) => {
    // let employess = ["Osama", "Ahmed", "Mai", "Saad"];
    let employess = [];
    if(employess.length === 4) {
        resolved(employess);
    }else {
        rejected(Error("Number of employess is not 4"));
    }
});

myPromise.then(
    (resolvedValue) => {
        resolvedValue.length = 2;
        console.log(resolvedValue);
        return resolvedValue;
    }
    )
    .then(
    (resolvedValue) => {
        resolvedValue.length = 1;
        return resolvedValue;
    }
    )
    .then(
    (resolvedValue) => {
        console.log(`The choosen employee is ${resolvedValue}`);
    }
    )
    .catch(
    (rejectedReason) => {
        console.log(rejectedReason);
    }
    )
    .finally(console.log("The Operation is done"));


    // const myPromise = new Promise((resolve, reject) => {
    //     // let employess = ["Ahmed", "Osama", "Satyed", "Eslam"]
    //     let employess = []
    //     if(employess.length === 4) {
    //         resolve(employess);
    //     }else {
    //         reject(Error("Number of employess not 4"));
    //     }
    // });
    
    // myPromise.then(
    //     (resolveValue) => {
    //         resolveValue.length = 2;
    //         return resolveValue;
    //     }
    // )
    // .then(
    //     (resolveValue) => {
    //         resolveValue.length = 1;
    //         return resolveValue;
    //     }
    // )
    // .then(
    //     (resolveValue) => {
    //         console.log(`The empolyee is ${resolveValue}`);
    //     }
    // ).catch(
    //     (rejectedReason) => {
    //         console.log(rejectedReason);
    //     }
    // ).finally(console.log("Operation Done"))

// Assignment 
// حاولت احله قبل وقته والحمد لله طلعت تنين

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "j.json", true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        let mainData = Array.from(data).slice(0, 5);
            for(let i = 0; i < mainData.length; i++) {
                let title = document.createTextNode(mainData[i].title);
                let description = document.createTextNode(mainData[i].description);

                let div = document.createElement("div");
                let h3 = document.createElement("h3");
                let p = document.createElement("p");  
                h3.appendChild(title);
                p.appendChild(description);

                div.appendChild(h3);    
                div.appendChild(p);
                
                document.body.appendChild(div);
            }
    }
}