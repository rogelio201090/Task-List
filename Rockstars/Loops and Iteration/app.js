for(let i = 0; i <= 10; i++) {
    console.log(i);

    if (i === 5) {
        continue; 
    }else if (i > 7) break;

    console.log("after the initial log");
}

