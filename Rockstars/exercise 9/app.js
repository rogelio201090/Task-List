let adjective = prompt("Write an adjective?");
    if (adjective === ""){
        alert("Error");}
let noun = prompt("Write a noun?");
    if (noun === ""){
        alert("Error");}
let adjective2 = prompt("Write and adjective?");
    if (adjective2 === ""){
        alert("Error");}
let pluralnoun = prompt("Write a plural noun");
    if (pluralnoun === "" ){
        alert("Error");}
let verb = prompt("Write a verb (-ed)?");
    if (verb === "" ){
        alert("Error");}
let pluralnoun2 = prompt("Write a plural noun?");
    if (pluralnoun2 === "" ){
        alert("Error");}
let pluralnoun3 = prompt("Write a plural noun?");
    if (pluralnoun3 === ""){
        alert("Error");}
let verb2 = prompt("write a verb?");
    if (verb2 === ""){
        alert("Error");}
let noun2 = prompt("Write a noun?");
    if (noun2 === ""){
        alert("Error");}
let noun3 = prompt("write a noun?");
    if (noun3 === ""){
        alert("Error");}
let verb3 = prompt("Write a verb");
    if (verb3 === ""){
        alert("Error");}
let adjective3 = prompt("Write an adjective?");
    if (adjective3 === ""){
        alert("Error");}
let liquid = prompt("Write a liquid");
    if (liquid === ""){
        alert("Error")}

console.log(`My favorite Thanksgiving food is ${adjective} ${noun} .I like to eat it with ${adjective2} ${pluralnoun} for leftlovers, too. One of the best side dishes
${verb} ${pluralnoun2} You take a bunch of ${pluralnoun3} ${verb2} them, and put them in a a big ${noun2} full of water. Once theyre cooked, you add milk and
 ${noun3} and ${verb3} until its all mashed together. Then you pour ${adjective3} ${liquid} over it and enjoy.`);

document.body.innerHTML = "<H1>" + `My favorite Thanksgiving food is ${adjective} ${noun} .I like to eat it with ${adjective2} ${pluralnoun} for leftlovers, too. One of the best side dishes
${verb} ${pluralnoun2} You take a bunch of ${pluralnoun3} ${verb2} them, and put them in a a big ${noun2} full of water. Once theyre cooked, you add milk and
 ${noun3} and ${verb3} until its all mashed together. Then you pour ${adjective3} ${liquid} over it and enjoy.` + "</H1>";
