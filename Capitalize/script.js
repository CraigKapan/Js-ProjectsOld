const toCapital = str => {
    const words = str.split(" ")
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

const shortStr = "Hi there"
const longStr = "the quick brown fox jumped over the lazy dog";

toCapital(longStr);

"word".slice(1)