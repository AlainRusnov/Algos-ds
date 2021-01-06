// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const vowels = "aeiou";
let consonants = "";

function vowelsAndConsonants(s) {
    for (let l of s) {
        if (vowels.includes(l)) {
            console.log(l);
        } else {
            consonants += l + "\n";
        }
    }
    console.log(consonants);
}