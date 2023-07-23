/*
    => To understand Ajax, Fetch, Promises

    [Promises - What is Callback Hell and Pyramid of Doom] L179
    => Callback hell is a function that is passed into another one as an argument to be executed later

    EX {
        Function to handle photos
        [1] Download photo from URL
        [2] Resize photo
        [3] Add logo to the photo
        [4] Show the photo in website
    }
*/
let p = document.querySelector(".test");

function makeItRed(e) {
    e.target.style.color = "red";
    setTimeout(() => {
        e.target.style.color = "black";
        console.log("Back")
    }, 3000);
};
p.addEventListener("click", makeItRed);

function IamCallback() {
    console.log("I'm a callback function");
}

setTimeout(IamCallback, 500);

setTimeout(()=> {
    console.log("Download photo from URL");
    setTimeout(()=> {
        console.log("Resize photo")
        setTimeout(()=> {
            console.log("Add logo to the photo")
            setTimeout(()=> {
                console.log("Show the photo in website")
            },1000)
        },1000)
    },1000)
},1000)