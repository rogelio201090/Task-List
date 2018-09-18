let maxScopps = Number(prompt('How many scoops?'));
let scoop = 1;
do {
    console.log(`Add another scoop to my ${scoop}`)
    scoop++
} while (scoop < Number(maxScoops));