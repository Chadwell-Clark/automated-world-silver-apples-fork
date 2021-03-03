// $("#malaysia").on("click", function () {
//     $("<h3>Malaysia</h3>").appendTo(".content");
// });
// $("#malaysia").on("click", function () {
//     console.log("MALYSIA  MALAYSIA  MALAYSIA");
// });
document.getElementById("malaysia").addEventListener("click", malaysia);
document.getElementById("germany").addEventListener("click", germany);
document.getElementById("iceLand").addEventListener("click", iceland);
document.getElementById("home").addEventListener("click", home);

function malaysia() {
    // document.getElementByID("test").innerHTML = `MALYSIA  MALAYSIA  MALAYSIA`;
    console.log("MALYSIA  MALAYSIA  MALAYSIA");
    // alert("Warning this computer is infected with CORONAVIRUS!!!");
}
function germany() {
    console.log(`<h1>Welcome to Germany</h1>`)
    console.log("GERMANY GERMANY GERMANY");
}
function iceland() {
    
    console.log("ICELAND ICELAND ICELAND");
}
function home() {
    document.querySelector("#homeH-ONE").innerHTML = `MALYSIA  MALAYSIA  MALAYSIA`;
    
    console.log("HOME is where the HEART is");
}