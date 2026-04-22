class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let copyNums = nums;
        let lenghtCopyNum = copyNums.length;
        let foundDuplicateCounter = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < lenghtCopyNum; j++) {
                if (nums[i] == copyNums[j]) {
                    foundDuplicateCounter++;
                }
                if (foundDuplicateCounter > 1) {
                    return true;
                }
            }
            foundDuplicateCounter = 0;
        }

        return false;
    }
}

nums = [1,2,3,3];
let solution = new Solution();
solution.hasDuplicate(nums);
