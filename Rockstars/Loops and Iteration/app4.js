let frutas = [
    "apple",
    "melon", 
    "strawberry",
    "blueberry",
    "watermelon",
    "grapes"
];

frutas.forEach(iterationFunction);

function iterationFunction(element, indice) {
    console.log(`We are processing the element #${indice} = ${element}`);
 };

