const request = require('superagent')

async function test() {
    let response = await request
        .get("https://api.datamuse.com/words")
        .query({
            "sl": "fart",
            "md": "d"
        })
    console.log(response.body);
    let words = response.body;
    console.log(words);
    for (let word of words) {
        if (word.defs.length != 0) {
            console.log(word.defs.join("\n"));
            return;
        }
    }
}

try {
    test();
} catch (e) {
    console.log(e);
}
