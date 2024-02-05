function longestCommonPrefix(array)
{

    const size = array.length;
    if (size == 0) return "";
    if (size == 1) return array[0];

    const len = array.reduce((r, s) => Math.min(r, s.length), Infinity);
    for (let i = len; i > 0; i--) {
        const target = array[0].slice(0, i)
        if (array.every(s => s.slice(0, i) === target)) {
            return target
        }
    }
    return ''
}

const input = ["flower","flo","flight"]
console.log(longestCommonPrefix(input))
    