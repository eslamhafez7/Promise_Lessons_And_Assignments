/*
    [Assignment 2]
*/
async function fetchJson () {
    try {
        let myData = await fetch("app.json");
        let data = await myData.json();
        data.length = 5;
        console.log(data);
        for(let i = 0; i < data.length; i++) {
            let title = document.createTextNode(data[i].title);
            let desc = document.createTextNode(data[i].description);
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            h3.appendChild(title);
            let p = document.createElement("p");
            p.appendChild(desc);
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }
    } catch(reason) {
        console.log(Error(`Rejected: no data found`));
    }
}
fetchJson();