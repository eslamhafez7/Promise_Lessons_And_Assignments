/*
    [Assignment 1]
// */
// soluation 1

// function getData (apiLink) {
//     return new Promise((res, rej) => {
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function() {
//             if(this.readyState === 4 && this.status === 200) {
//                 let data = (JSON.parse(this.responseText));
//                 let maindata = Array.from(data).slice(0, 5);
//                 for(let i = 0; i < maindata.length; i++) {
//                     let title = document.createTextNode(maindata[i].title);
//                     let desc = document.createTextNode(maindata[i].description);
            
//                     let div = document.createElement("div");
            
//                     let h3 = document.createElement("h3");
//                     h3.appendChild(title);
            
//                     let p = document.createElement("p");
//                     p.appendChild(desc);
            
//                     div.appendChild(h3);
//                     div.appendChild(p);
            
//                     document.body.appendChild(div);
//                 }
//                 res (maindata);
//             }else {
//                 rej(Error("XML Http Error"));
//             }
//         }
//         myRequest.open("GET", apiLink);
//         myRequest.send();
//         console.log(myRequest);
//     })
// }
// getData("app.json")
// .then((resvalue) => {
//     console.log(resvalue);
// })
// .catch((rejvalue) => console.log(rejvalue))
// .finally(() => console.log("Operation Done Successfully"))

// soluation 2
function getData (apiLink) {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();
        request.onload = function() {
            if(this.readyState === 4 && this.status === 200) {
                res(JSON.parse(this.responseText))
            }else {
                rej(Error("Connection Faild"))
            }
        }
        request.open("GET", apiLink)
        request.send();
    })
}
getData("app.json").then(
    (resvalue) => {
        resvalue.length = 5;
        return resvalue;
    }
).then(
    (resvalue) => {
        for(let i = 0; i < resvalue.length; i++) {
            let title = document.createTextNode(resvalue[i].title);
        let desc = document.createTextNode(resvalue[i].description);
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        h3.appendChild(title);
        let p = document.createElement("p");
        p.appendChild(desc);
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    }
    }
).catch((reasne) => console.log(reasne)).finally(() => console.log("Operation Done"))