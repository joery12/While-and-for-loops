for (let i = 0; i <= 20; i++) {
    console.log(`Is ${i} even or odd?`); // Met " " ipv ` ` werkt het niet goed. Dit heeft te maken met ${i}
    if (i % 2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }
}