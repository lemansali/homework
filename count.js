function wordCount([string, word]) {
    let count = 0;

    for(let char of string) {
        if(char == word) {
            count++;
        }
    }
    console.log(count);
}
wordCount(['parallelepiped', 'p']);
