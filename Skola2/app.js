console.log("app.js is loaded...");

let helloBtn = document.querySelector("#helloBtn");



helloBtn.addEventListener("click", 
function (event){

    let helloTag = document.querySelector(".helloTag");
    helloTag.innerHTML = "GoodBye World!";

}
,false);

