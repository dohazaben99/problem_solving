
function isPalindrome(s) {

    /// using regex 
    s = s.replace(/[^a-z0-9]/gi, '');
    s = s.toLowerCase();

    const len = s.length;

    console.log(s);

    if (len == 0) {
        return "Empty String!"
    }
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}



console.log(isPalindrome("madam"));
console.log(isPalindrome(""));
console.log(isPalindrome('A man, a plan, a canal, Panama!'));


