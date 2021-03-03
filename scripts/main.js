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
    // document.getElementsByID("test").innerHTML = `<p>MALYSIA  MALAYSIA  MALAYSIA</p>`;
    console.log("MALYSIA  MALAYSIA  MALAYSIA");
}
function germany() {
    console.log(`<h1>Welcome to Germany</h1>`)
    console.log("GERMANY GERMANY GERMANY");
}
function iceland() {
    
    console.log("ICELAND ICELAND ICELAND");
}
function home() {
    
    console.log("Home is where ther heart is");
}