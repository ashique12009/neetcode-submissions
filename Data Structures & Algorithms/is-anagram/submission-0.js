class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let countObject = {};

        // Count Object build, that each character is repeating how many times
        for (let char of s) { 
            if (countObject[char]) {
                countObject[char] = countObject[char] + 1;
            }
            else {
                countObject[char] = 1;
            }
        }

        // Now loop string of t of each character and if match then
        // eleminate that key pair element
        for (let char of t) {
            if (!countObject[char]) {
                return false;
            }
            countObject[char]--;
        }

        return true;
    }
}
